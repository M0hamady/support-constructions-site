// src/utils/formatDate.ts

/**
 * Formats a JavaScript Date object to a human-readable string.
 * @param date - The Date object to format.
 * @returns A formatted date string, e.g., "October 5, 2024".
 */
export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };
  