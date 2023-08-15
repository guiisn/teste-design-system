import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ColorInput from '.';

export default {
  title: 'Components/Inputs/ColorInput',
  component: ColorInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
    },
    withAsterisk: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    error: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    variant: {
      options: ['default', 'filled', 'unstyled'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof ColorInput>;

export const Component: StoryObj<typeof ColorInput> = {
  args: {
    label: 'Color',
  },
};
