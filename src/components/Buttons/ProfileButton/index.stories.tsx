import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProfileButton from '.';

export default {
  title: 'Components/Buttons/ProfileButton',
  component: ProfileButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof ProfileButton>;

export const Component: StoryObj<typeof ProfileButton> = {};
