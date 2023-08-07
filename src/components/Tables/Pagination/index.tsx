import {
  Box, MantineProvider, Pagination, PaginationProps,
} from '@mantine/core';
import React from 'react';
import GlobalTheme from '../../../styles/theme';
import useStyles from './style';

export default function TablePagination(props: PaginationProps): JSX.Element {
  const { onChange, total } = props;
  const { classes } = useStyles();
  return (
    <MantineProvider theme={GlobalTheme} withGlobalStyles withNormalizeCSS>
      <Box className={classes.component} data-testid="paginationContainer">
        <Pagination
          onChange={onChange}
          total={total}
          radius="xl"
          color="laraPurple"
          classNames={{
            control: classes.control,
          }}
        />
      </Box>
    </MantineProvider>
  );
}
