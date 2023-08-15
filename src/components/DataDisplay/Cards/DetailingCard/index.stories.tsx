import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PigMoney } from 'tabler-icons-react';
import { laraGray } from '../../../../styles/colors';
import DetailingCard from '.';

export default {
  title: 'Components/Data Display/DetailingCard',
  component: DetailingCard,
  tags: ['autodocs'],
  argTypes: {
    total: {
      type: 'number',
    },
  },
  decorators: [
    (Story) => <div style={{ height: '20rem' }}>{Story()}</div>,
  ],
} as Meta<typeof DetailingCard>;

export const Component: StoryObj<typeof DetailingCard> = {
  args: {
    installments: 3,
    installmentAmount: 2400,
    interestRate: 2.5,
    totalAmount: 7200,
    cet: 60,
    firstPayment: '12/12/2023',
  },
};
