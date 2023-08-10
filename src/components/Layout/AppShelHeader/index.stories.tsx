import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bell, ChevronLeft } from 'tabler-icons-react';
import AppShellHeader, { AppShellHeaderProps } from '.';

export default {
  title: 'Components/Layout/AppShellHeader',
  component: AppShellHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<AppShellHeaderProps>;

export const Component: StoryObj<AppShellHeaderProps> = {
  args: {
    headerMarginLeft: {
      md: 0, lg: 0, xl: 0, sm: 0, xs: 0,
    },
    pageTitle: 'Page title',
    returnButtonProps: {
      leftIcon: <ChevronLeft />,
      children: 'Back',
    },
    searchInputProps: {
      placeholder: 'Search the contract',
    },
    notificationButtonProps: {
      tooltipTitle: 'Notifications',
      actionsCounter: '01',
      children: <Bell />,
      color: 'violet.4',
      variant: 'outline',
      radius: '50%',
    },
  },
};
