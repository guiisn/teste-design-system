import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import LogoLara, { LogoLaraProps } from '.';

export default {
  title: 'Components/DataDisplay/LogoLara',
  component: LogoLara,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<LogoLaraProps>;

export const Component: StoryObj<LogoLaraProps> = {
  args: {
    variant: 'black',
  },
};
