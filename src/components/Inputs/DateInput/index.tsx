import React from 'react';
import { DateInputProps, DateInput as MantineDateInput } from '@mantine/dates';
import 'dayjs/locale/pt';

export default function DateInput(props: Omit<DateInputProps, 'locale'>): JSX.Element {
  const { valueFormat, ...rest } = props;

  let format = valueFormat;
  if (!format) {
    format = 'DD/MM/YYYY';
  }

  return (
    <MantineDateInput
      locale="pt-BR"
      valueFormat={format}
      {...rest}
    />
  );
}
