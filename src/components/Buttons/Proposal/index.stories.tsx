import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ReportMoney } from 'tabler-icons-react';
import logo from '../../../assets/logo.svg';
import ProposalButton, { ProposalButtonProps } from '.';

export default {
  title: 'Buttons/ProposalButton',
  component: ProposalButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<ProposalButtonProps>;

export const Component: StoryObj<ProposalButtonProps> = {
  args: {
    selected: false,
    icon: <ReportMoney />,
    text: 'Parcelado sem juros',
    onClick: (e) => console.log(e),
  },
};

export const Selected: StoryObj<ProposalButtonProps> = {
  args: {
    selected: true,
    icon: <ReportMoney />,
    text: 'Parcelado sem juros',
  },
};
export const WithImage: StoryObj<ProposalButtonProps> = {
  args: {
    selected: false,
    icon: <img src={logo} alt="Lara" />,
  },
};
