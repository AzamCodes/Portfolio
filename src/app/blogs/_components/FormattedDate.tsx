// File: components/FormattedDate.tsx
import React from 'react';

interface FormattedDateProps {
  date: string | Date;
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
}

const FormattedDate: React.FC<FormattedDateProps> = ({
  date,
  locale = 'en-US',
  options = { month: 'long', day: 'numeric', year: 'numeric' },
}) => {
  const d = new Date(date);
  return <span>{d.toLocaleDateString(locale, options)}</span>;
};

export default FormattedDate;
