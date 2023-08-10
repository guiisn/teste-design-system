import { Group, Header, Title } from '@mantine/core';
import React from 'react';
import HeaderReturnButton, { HeaderReturnButtonProps } from '../../Buttons/HeaderReturnButton';
import IconButton, { IconButtonProps } from '../../Buttons/IconButton';
import ProfileButton from '../../Buttons/ProfileButton';
import HeaderInput, { HeaderInputProps } from '../../Inputs/HeaderInput';

export interface AppShellHeaderProps {
    headerMarginLeft: {md: number;lg: number;xl: number;sm: number;xs: number;}
    pageTitle: string,
    returnButtonProps: HeaderReturnButtonProps
    searchInputProps: HeaderInputProps
    notificationButtonProps: IconButtonProps
}

export default function AppShellHeader(props: AppShellHeaderProps): JSX.Element {
  const {
    headerMarginLeft, returnButtonProps, searchInputProps, notificationButtonProps, pageTitle,
  } = props;

  return (
    <Header
      data-testid="app-shell-header"
      ml={headerMarginLeft}
      height="7.5rem"
      sx={(theme) => ({
        backgroundColor: theme.colors.violet[0],
        border: 0,
        maxHeight: '7.5rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2.5rem',
      })}
    >
      <Group position="apart" w="100%">
        <Group>
          <HeaderReturnButton {...returnButtonProps} />
          <Title order={2} weight={800}>{pageTitle}</Title>
        </Group>
        <Group>
          <HeaderInput {...searchInputProps} />
          <ProfileButton />
          <IconButton {...notificationButtonProps} />
        </Group>
      </Group>
    </Header>
  );
}
