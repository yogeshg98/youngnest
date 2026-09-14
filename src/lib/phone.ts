import { isSupportedCountry, parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js/min';

/** Empty means omitted; null means invalid; otherwise an international phone number. */
export function normalizePhone(value: unknown, country: unknown = 'DE'): string | null {
  if (value === undefined) return '';
  if (typeof value !== 'string' || value.length > 64) return null;
  const input = value.trim();
  if (!input) return '';
  if (typeof country !== 'string' || !isSupportedCountry(country)) return null;
  // Do not extract numbers from arbitrary text or silently drop extensions.
  if (!/^\+?[\d\s().-]+$/.test(input)) return null;
  const number = parsePhoneNumberFromString(input.replace(/^00/, '+'), {
    defaultCountry: country as CountryCode,
    extract: false,
  });
  return number?.isPossible() ? number.number : null;
}
