import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return hours > 0 ? `${String(hours)}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
};

export const arabicNumeralFormatter = (
  englishDigits: string,
  useCommas: boolean,
): string => {

  const ENGLISH_TO_ARABIC_MAP: Readonly<Record<string, string>> = {
    '0': '٠',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
  };

  if (isNaN(Number(englishDigits))) {
    return englishDigits;
  }

  const [integerPart = '', fractionalPart] = englishDigits.split('.');
  const arabicIntegerPart = integerPart
    .split('')
    .reverse()
    .map((digit, index) => {
      const arabicDigit = ENGLISH_TO_ARABIC_MAP[digit] || digit;
      const comma = useCommas && index % 3 === 0 && index !== 0 ? '،' : '';
      return arabicDigit + comma;
    })
    .reverse()
    .join('');

  const arabicFractionalPart = fractionalPart
    ? '.' + fractionalPart.split('').map(digit => ENGLISH_TO_ARABIC_MAP[digit] || digit).join('')
    : '';

  return arabicIntegerPart + arabicFractionalPart;
};