/**
 * Formats raw numeric string into Brazilian phone format:
 * (XX) XXXXX-XXXX or (XX) XXXX-XXXX
 */
export function formatPhoneNumber(value: string): string {
  if (!value) return "";
  
  // Keep only numbers
  const cleaned = value.replace(/\D/g, "").slice(0, 11);

  if (cleaned.length === 0) return "";
  if (cleaned.length <= 2) return `(${cleaned}`;
  if (cleaned.length <= 6) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  if (cleaned.length <= 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
}

/**
 * Strips all non-digit characters from phone string
 */
export function cleanPhoneNumber(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Validates if the phone has at least 10 or 11 digits
 */
export function isValidBrazilianPhone(value: string): boolean {
  const digits = cleanPhoneNumber(value);
  return digits.length >= 10 && digits.length <= 11;
}
