import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProfileMenu, { ProfileMenuProps } from '.';

export default {
  title: 'Components/Overlays/ProfileMenu',
  component: ProfileMenu,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box h="50rem">
        {Story()}
      </Box>
    ),
  ],
} as Meta<ProfileMenuProps>;

export const Component: StoryObj<ProfileMenuProps> = {
  args: {
    userName: 'Usuário da Silva',
    userEmail: 'user@silva.com',
    userRole: 'Dev',
    userLogin: 'devSilva',
    franchisee: 'Batukam',
    franchisor: 'Batukam',
    unit: 'Batukam',
    profile: 'https://lh3.googleusercontent.com/pw/AIL4fc9W2OxxoJgGEIBil7KiX2nWcbGefVOz1htr1K59jdC7Bh5EDWZnPkpuuYNte4RO_A04HtCXImPK87JydQYhggZVgiOafTSxci6wsC1jS0d3wXGRPQBtdtDyigyY8ZnCfLBPdobqfeTgZhBQ2OC_TyE=w45-h54-s-no?authuser=0',
  },
};
