import {
  Box, Loader,
  Stack,
} from '@mantine/core';
import React from 'react';
import NoResults from '../../Feedbacks/NoResults';
import TablePagination from '../Pagination';
import useStyles from './style';

export interface DataTableProps {
  columns: Array<string>;
  rows: Record<string, string | JSX.Element | number>[] | any;
  isLoading?: boolean;
  paginationProps?: PaginationProps;
}

export interface PaginationProps {
  onPageChange: (activePage: number) => void;
  totalPages: number;
}

export default function DataTable({
  columns,
  rows,
  isLoading,
  paginationProps,
}: DataTableProps): JSX.Element {
  const { classes } = useStyles();

  const keys = rows?.length ? Object.keys(rows[0]) : null;

  const noResults = (!rows || !rows?.length) && !isLoading;

  return (
    <Box className={classes.component}>
      <Box className={classes.tableContainer}>
        <table className={classes.table}>
          <thead>
            <tr>
              {columns?.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          {!isLoading && rows?.length ? (
            <tbody>
              {rows?.map((item: any, index: number) => (
                <tr key={index}>
                  {keys?.map((key) => (
                    <td key={key}>{item[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
        {noResults && (
          <Stack h="calc(100% - 3.75rem)" justify="center" align="center">
            <NoResults />
          </Stack>
        )}
        {isLoading && (
          <Stack h="calc(100% - 3.75rem)" justify="center" align="center">
            <Loader color="violet.4" />
          </Stack>
        )}
      </Box>
      <TablePagination
        total={Number(paginationProps?.totalPages ?? 0)}
        onChange={paginationProps?.onPageChange}
      />
    </Box>
  );
}
