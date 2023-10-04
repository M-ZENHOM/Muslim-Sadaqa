import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertDateToArabic(date: string): string {
  const months: { [key: string]: string } = {
    'Jan': 'يناير',
    'Feb': 'فبراير',
    'Mar': 'مارس',
    'Apr': 'إبريل',
    'May': 'مايو',
    'Jun': 'يونيو',
    'Jul': 'يوليو',
    'Aug': 'أغسطس',
    'Sep': 'سبتمبر',
    'Oct': 'أكتوبر',
    'Nov': 'نوفمبر',
    'Dec': 'ديسمبر'
  };

  const dateParts = date.match(/(\d{2}) (\w{3}) (\d{4})/);

  if (dateParts) {
    const [, day, monthAbbreviation, year] = dateParts;
    const month = months[monthAbbreviation!];

    if (month) {
      return `${day} ${month} ${year}`;
    }
  }

  return 'Invalid date format';
}


export function getDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
}