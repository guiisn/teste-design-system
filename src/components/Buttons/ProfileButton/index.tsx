import { Avatar, UnstyledButton } from '@mantine/core';
import React from 'react';

export default function ProfileButton(): JSX.Element {
  return (
    <UnstyledButton>
      <Avatar
        src="https://lh3.googleusercontent.com/pw/AIL4fc9W2OxxoJgGEIBil7KiX2nWcbGefVOz1htr1K59jdC7Bh5EDWZnPkpuuYNte4RO_A04HtCXImPK87JydQYhggZVgiOafTSxci6wsC1jS0d3wXGRPQBtdtDyigyY8ZnCfLBPdobqfeTgZhBQ2OC_TyE=w45-h54-s-no?authuser=0"
        alt="it's me"
        radius="50%"
        sx={(theme) => ({
          backgroundColor: '#FFC9B3',
          border: `1px solid ${theme.colors.violet[4]}`,
        })}
      />
    </UnstyledButton>
  );
}
