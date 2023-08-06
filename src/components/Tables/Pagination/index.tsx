import { Box, Pagination, PaginationProps } from '@mantine/core';
import React from 'react';
import useStyles from './style';

export default function TablePagination(props: PaginationProps): JSX.Element {
  const { onChange, total } = props;
  const { classes } = useStyles();
  return (
    <Box className={classes.component} data-testid="paginationContainer">
      <Pagination
        onChange={onChange}
        total={total}
        radius="xl"
        color="laraPurple.4"
        classNames={{
          control: classes.control,
        }}
      />
    </Box>
  );
}
