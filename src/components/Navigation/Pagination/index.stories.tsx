import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PaginationProps } from '@mantine/core';
import TablePagination from '.';

export default {
  title: 'Components/Navigation/Pagination',
  component: TablePagination,
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ height: '20rem' }}>{Story()}</div>,
  ],
} as Meta<PaginationProps>;

export const Table: StoryObj<PaginationProps> = {
  args: {
    total: 10,
  },
};
