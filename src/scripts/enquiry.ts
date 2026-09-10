/** Future API boundary: the server must validate and persist before reporting success. */
export interface EnquiryPayload {
  name: string;
  email: string;
  moveIn: string;
  stay?: string;
  message?: string;
  language: 'en';
}

export type EnquiryResult = { status: 'preview' } | { status: 'accepted'; reference: string };

/** Intentionally performs no network calls or persistence in version 1. */
export async function submitEnquiry(_payload: EnquiryPayload): Promise<EnquiryResult> {
  return { status: 'preview' };
}
