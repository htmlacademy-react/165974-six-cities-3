export const DateFormat = {
  YYYYMMDD: 'YYYY-MM-DD',
  MMMMYYYY: 'MMMM YYYY',
};

function formatDateToYYYYMMDD(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDateToMMMMYYYY(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth()];
  return `${month} ${year}`;
}

export function formatDate(dateTime: string, formatType = DateFormat.YYYYMMDD) {
  if (!dateTime) {
    return '';
  }

  let dateStr = '';

  switch (formatType) {
    case DateFormat.YYYYMMDD:
      dateStr = formatDateToYYYYMMDD(dateTime);
      break;
    case DateFormat.MMMMYYYY:
      dateStr = formatDateToMMMMYYYY(dateTime);
      break;
    default:
      dateStr = formatDateToYYYYMMDD(dateTime);
      break;
  }

  return dateStr;
}

// console.log(formatDate('2024-07-23T10:32:22.905Z', DateFormat.MMMMYYYY));
