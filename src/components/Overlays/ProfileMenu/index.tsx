import {
  Avatar, CloseButton, Divider, Group, Menu, Stack, Title,
  UnstyledButton,
} from '@mantine/core';
import React from 'react';
import { BuildingStore, Key, Logout } from 'tabler-icons-react';
import Button from '../../Buttons/Button';
import useStyles from './style';

export interface ProfileMenuProps {
    userName?: string
    userEmail?: string
    userRole?: string
    userLogin?: string
    franchisee?: string
    franchisor?: string
    unit?: string
    onCloseMenu?: () => void
    onChangePassword?: () => void
    onLogout?: () => void
    onChangeFranchisor?: () => void
    profile: string
  }

export default function ProfileMenu({
  franchisee,
  franchisor,
  onChangePassword,
  onCloseMenu,
  onLogout,
  unit,
  userEmail,
  userLogin,
  userName,
  userRole,
  onChangeFranchisor,
  profile,
}: ProfileMenuProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <Menu
      shadow="md"
      width="30rem"
      position="bottom-end"
      trigger="hover"
      classNames={{
        dropdown: classes.dropdown,
      }}
    >
      <Menu.Target>
        <UnstyledButton data-testid="profile-button">
          <Avatar
            data-testid="avatar"
            src={profile}
            alt="it's me"
            radius="50%"
            className={classes.avatar}
          />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Stack className={classes.dropdownContent}>
          <Group position="apart">
            <Title order={6} weight={700} color="gray">DADOS DO USUÁRIO</Title>
            <CloseButton onClick={onCloseMenu} />
          </Group>
          <Divider color="gray.1" />
          <Stack>
            <Group align="flex-start">
              <Avatar
                data-testid="avatar"
                src={profile}
                alt="it's me"
                radius="50%"
                className={classes.largeAvatar}
              />
              <Stack sx={{ gap: '1.25rem' }}>
                <Stack sx={{ gap: '.25rem' }}>
                  <Title order={6} weight={800} color="violet.4">Bem-vinda(o)</Title>
                  <Title order={5} weight={800} color="gray.9">{userName}</Title>
                </Stack>
                <Stack sx={{ gap: '.25rem' }}>
                  <Title order={6} weight={800} color="violet.4">Tipo de usuário</Title>
                  <Title order={5} weight={500} color="gray.9">{userRole}</Title>
                </Stack>
              </Stack>
            </Group>
            <Stack sx={{ gap: '.25rem' }}>
              <Title order={6} weight={800} color="violet.4">E-mail</Title>
              <Title order={5} weight={500} color="gray.9">{userEmail}</Title>
            </Stack>
            <Stack sx={{ gap: '.25rem' }}>
              <Title order={6} weight={800} color="violet.4">Login</Title>
              <Title order={5} weight={500} color="gray.9">{userLogin}</Title>
            </Stack>
            <Divider color="gray.1" />
          </Stack>

          <Stack align="flex-start">
            <Button
              variant="light"
              color="violet.4"
              leftIcon={<BuildingStore />}
              onClick={onChangeFranchisor}
            >
              Alterar franquia
            </Button>

            <Stack sx={{ gap: '.25rem' }}>
              <Title order={6} weight={800} color="violet.4">Unidade</Title>
              <Title order={5} weight={500} color="gray.9">{unit}</Title>
            </Stack>

            <Stack sx={{ gap: '.25rem' }}>
              <Title order={6} weight={800} color="violet.4">Franqueado</Title>
              <Title order={5} weight={500} color="gray.9">{franchisee}</Title>
            </Stack>

            <Stack sx={{ gap: '.25rem' }}>
              <Title order={6} weight={800} color="violet.4">Franquia</Title>
              <Title order={5} weight={500} color="gray.9">{franchisor}</Title>
            </Stack>

          </Stack>

          <Divider color="gray.1" w="100%" />

          <Group position="apart">
            <Button
              variant="light"
              w="11rem"
              color="violet.4"
              leftIcon={<Key />}
              onClick={onChangePassword}
            >
              Alterar senha
            </Button>
            <Button
              variant="light"
              w="11rem"
              color="red.4"
              leftIcon={<Logout />}
              onClick={onLogout}
            >
              Logout
            </Button>
          </Group>
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
}
