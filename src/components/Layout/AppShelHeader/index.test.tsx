import React from 'react';
import { render, screen } from '@testing-library/react';
import { Bell } from 'tabler-icons-react';
import AppShellHeader from '.';
import { IconButtonProps } from '../../Buttons/IconButton';

describe('AppShellHeader', () => {
  const mockReturnButtonProps = {
    onClick: jest.fn(),
    leftIcon: <span>Back</span>,
  };

  const mockSearchInputProps = {
    placeholder: 'Search',
    onChange: jest.fn(),
  };

  const mockNotificationButtonProps: IconButtonProps = {
    tooltipTitle: 'test',
    children: <Bell />,
  };

  const mockPageTitle = 'My Page';

  it('renders the Header component with the specified props', () => {
    const mockHeaderMarginLeft = {
      md: 20,
      lg: 30,
      xl: 40,
      sm: 10,
      xs: 5,
    };

    render(
      <AppShellHeader
        headerMarginLeft={mockHeaderMarginLeft}
        returnButtonProps={mockReturnButtonProps}
        searchInputProps={mockSearchInputProps}
        notificationButtonProps={mockNotificationButtonProps}
        pageTitle={mockPageTitle}
      />,
    );

    const headerElement = screen.getByTestId('app-shell-header');

    expect(headerElement).toBeInTheDocument();
  });

  it('renders the ReturnButton, Title, SearchInput, ProfileButton, and NotificationButton', () => {
    render(
      <AppShellHeader
        headerMarginLeft={{
          md: 20, lg: 30, xl: 40, sm: 10, xs: 5,
        }}
        returnButtonProps={mockReturnButtonProps}
        searchInputProps={mockSearchInputProps}
        notificationButtonProps={mockNotificationButtonProps}
        pageTitle={mockPageTitle}
      />,
    );

    const returnButtonElement = screen.getByText('Back');
    const titleElement = screen.getByText('My Page');
    const searchInputElement = screen.getByPlaceholderText('Search');
    const profileButtonElement = screen.getByAltText("it's me");

    expect(returnButtonElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(searchInputElement).toBeInTheDocument();
    expect(profileButtonElement).toBeInTheDocument();
  });

  it('calls onClick when the ReturnButton is clicked', () => {
    render(
      <AppShellHeader
        headerMarginLeft={{
          md: 20, lg: 30, xl: 40, sm: 10, xs: 5,
        }}
        returnButtonProps={mockReturnButtonProps}
        searchInputProps={mockSearchInputProps}
        notificationButtonProps={mockNotificationButtonProps}
        pageTitle={mockPageTitle}
      />,
    );

    const returnButtonElement = screen.getByText('Back');
    returnButtonElement.click();

    expect(mockReturnButtonProps.onClick).toHaveBeenCalledTimes(1);
  });
});
