import { Stack, UnstyledButton, useMantineTheme } from '@mantine/core';
import React from 'react';

export interface ProposalButtonProps {
    selected?: boolean
    icon?: JSX.Element
    text?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ProposalButton({
  selected, icon, text, onClick,
}: ProposalButtonProps): JSX.Element {
  const theme = useMantineTheme();

  return (
    <UnstyledButton
      onClick={onClick}
      sx={{
        padding: '1.9375rem 1.2rem',
        boxShadow: !selected ? '0px 7px 21px 0px rgba(8, 73, 132, 0.18)' : '0px 7px 21px 0px rgba(112, 13, 255, 0.28)',
        borderRadius: '40px',
        border: !selected ? '3px solid transparent' : `3px solid ${theme.colors.violet[4]}`,
        color: !selected ? theme.colors.gray[7] : theme.colors.violet[4],
        fontWeight: 700,
        fontSize: '1.625rem',
        svg: {
          width: '4.5rem',
          height: '4.5rem',
        },
        minWidth: 'calc(19rem - 1.2rem)',
        minHeight: 'calc(12.125rem - 1.9375rem)',
        transition: 'all .4s',
        ':hover': {
          border: `3px solid ${theme.colors.violet[4]}`,
        },
      }}
    >
      <Stack align="center">
        {icon}
        {text}
      </Stack>
    </UnstyledButton>
  );
}
