import { render } from '@testing-library/react';
import React from 'react';
import ProfileButton from '.';

describe('ProfileButton', () => {
  it('renders an Avatar component with the specified props', () => {
    const { getByTestId } = render(<ProfileButton />);

    expect(getByTestId('profile-button')).toBeInTheDocument();
  });

  it('renders an UnstyledButton component', () => {
    const { getByTestId } = render(<ProfileButton />);

    expect(getByTestId('avatar')).toBeInTheDocument();
  });
});
