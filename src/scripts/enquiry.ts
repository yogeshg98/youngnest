export interface EnquiryPayload {
  name: string;
  email: string;
  moveIn: string;
  stay?: string;
  message?: string;
  language: 'en';
  privacyConsent: boolean;
  turnstileToken: string;
  website?: string;
}

export type EnquiryResult = { status: 'accepted'; reference: string };

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  const response = await fetch('/api/enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  const data: unknown = await response.json().catch(() => null);
  if (!response.ok || !data || typeof data !== 'object' || !('reference' in data) || typeof data.reference !== 'string') {
    const message = data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
      ? data.error
      : 'We couldn’t send your enquiry. Please try again or contact us directly.';
    throw new Error(message);
  }
  return { status: 'accepted', reference: data.reference };
}
