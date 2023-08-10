import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Bell, ChevronLeft } from 'tabler-icons-react';
import AppShell from '.';
import { mockOptions } from '../AppShellNavbar/mock/permissions';
import NavLink from '../Navlink';
import { appShellFooter } from '../AppShellNavbar/mock/appShellFooter';
import NoResults from '../../Feedbacks/NoResults';

export default {
  title: 'Layout/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof AppShell>;

const options = mockOptions()?.map((option, index) => (
  !option?.links?.length ? (
    <NavLink
      data-testid="navigation-item"
      key={option?.label}
      label={option?.label}
      icon={<option.icon />}
      childrenOffset={0}
      active
    />
  ) : (
    <NavLink
      key={index}
      label={option?.label}
      icon={<option.icon />}
      childrenOffset={0}
      opened={false}
      active
    >
      {option?.links?.map((link, key) => (
        <NavLink
          variant="son"
          data-testid="navigation-item"
          key={key}
          label={link?.label}
          active
        />
      ))}
    </NavLink>
  )
));

const footer = appShellFooter.map((option, index) => (
  <NavLink
    label={option?.label}
    icon={<option.icon />}
    onClick={() => option?.onClick}
    key={index}
  />
));

const navbarWidths = {
  md: 187.5, lg: 225, xl: 262.5, sm: 150, xs: 93.75,
};

export const Component: StoryObj<typeof AppShell> = {
  args: {
    children: (<NoResults />),
    navbarProps: {
      options,
      footer,
      navbarWidths,
    },
    headerProps: {
      headerMarginLeft: navbarWidths,
      pageTitle: 'Page title',
      returnButtonProps: {
        leftIcon: <ChevronLeft />,
        children: 'Back',
      },
      searchInputProps: {
        placeholder: 'Search the contract',
      },
      notificationButtonProps: {
        tooltipTitle: 'Notifications',
        actionsCounter: '01',
        children: <Bell />,
        color: 'violet.4',
        variant: 'outline',
        radius: '50%',
      },
    },
  },
};
