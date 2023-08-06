import { MantineProvider } from '@mantine/core';
import React from 'react';
import Button from './components/Buttons/Button';
import NoResults from './components/Feedbacks/NoResults';
import DataTable from './components/Tables/DataTable';
import Pagination from './components/Tables/Pagination';
import GlobalTheme from './styles/theme';
import './styles/global.css';

export default function ThemeWrapper(props: { children: React.ReactNode }): JSX.Element {
  const { children } = props;

  return (
    <MantineProvider theme={GlobalTheme} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}

export {
  Button, NoResults, DataTable, Pagination,
};
