interface D1PreparedStatement {
  bind(...values: unknown[]): { run(): Promise<unknown> };
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface Env {
  ENQUIRIES_DB: D1Database;
  TURNSTILE_SECRET: string;
}

interface Context {
  request: Request;
  env: Env;
}

type EnquiryInput = {
  name: string;
  email: string;
  moveIn: string;
  stay: string;
  message: string;
  language: 'en';
  privacyConsent: boolean;
  turnstileToken: string;
  website: string;
};

const moveInOptions = new Set(['', 'as-soon-as-possible', 'within-1-month', 'within-3-months', 'later', 'flexible']);
const stayOptions = new Set(['', 'under-6-months', '6-12-months', 'over-12-months', 'unsure']);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

function text(value: unknown, maximum: number) {
  return typeof value === 'string' && value.trim().length <= maximum ? value.trim() : null;
}

function parseInput(body: unknown): EnquiryInput | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const value = body as Record<string, unknown>;
  const name = text(value.name, 120);
  const email = text(value.email, 254)?.toLowerCase();
  const moveIn = text(value.moveIn ?? '', 40);
  const stay = text(value.stay ?? '', 40);
  const message = text(value.message ?? '', 2000);
  const turnstileToken = text(value.turnstileToken, 4096);
  const website = text(value.website, 120);

  if (!name || !email || !emailPattern.test(email) || moveIn === null || stay === null || message === null || !turnstileToken || website === null) return null;
  if (value.privacyConsent !== true || value.language !== 'en' || !moveInOptions.has(moveIn) || !stayOptions.has(stay)) return null;
  return { name, email, moveIn, stay, message, language: 'en', privacyConsent: true, turnstileToken, website };
}

async function verifyTurnstile(request: Request, secret: string, token: string) {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret,
      response: token,
      remoteip: request.headers.get('CF-Connecting-IP') ?? undefined,
      idempotency_key: crypto.randomUUID(),
    }),
  });
  const result: unknown = await response.json().catch(() => null);
  return Boolean(result && typeof result === 'object' && 'success' in result && result.success === true && 'action' in result && result.action === 'enquiry');
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  const origin = request.headers.get('Origin');
  if (origin && origin !== new URL(request.url).origin) return json({ error: 'This enquiry request is not allowed.' }, 403);
  if (!request.headers.get('Content-Type')?.includes('application/json')) return json({ error: 'Please submit the form again.' }, 415);

  const input = parseInput(await request.json().catch(() => null));
  if (!input) return json({ error: 'Please check the form and try again.' }, 400);

  // Quietly accept bot submissions from the hidden field without storing them.
  if (input.website) return json({ reference: `YN-${crypto.randomUUID().slice(0, 8).toUpperCase()}` }, 201);
  if (!env.ENQUIRIES_DB || !env.TURNSTILE_SECRET) return json({ error: 'Enquiries are temporarily unavailable. Please contact us by email or WhatsApp.' }, 503);

  if (!(await verifyTurnstile(request, env.TURNSTILE_SECRET, input.turnstileToken))) {
    return json({ error: 'Please complete the security check and try again.' }, 403);
  }

  const id = crypto.randomUUID();
  const reference = `YN-${id.slice(0, 8).toUpperCase()}`;
  try {
    await env.ENQUIRIES_DB.prepare(
      `INSERT INTO enquiries (id, reference, name, email, move_in, stay, message, language, source, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'website', 'new')`,
    ).bind(id, reference, input.name, input.email, input.moveIn || null, input.stay || null, input.message || null, input.language).run();
    return json({ reference }, 201);
  } catch (error) {
    console.error('Unable to store enquiry', error);
    return json({ error: 'We couldn’t save your enquiry. Please try again or contact us directly.' }, 500);
  }
}
