import React from 'react';
import { render } from '@testing-library/react';
import LogoLara from '.';

describe('LogoLara', () => {
  it('renders logo', () => {
    const { getByAltText } = render(<LogoLara />);
    const logoElement = getByAltText('LARA');

    expect(logoElement).toBeInTheDocument();
  });

  it('renders white logo', () => {
    const { getByAltText } = render(<LogoLara variant="white" />);
    const logoElement = getByAltText('LARA');

    expect(logoElement).toBeInTheDocument();
  });

  it('applies custom width and height', () => {
    const { getByAltText } = render(<LogoLara w="100px" h="50px" />);
    const logoElement = getByAltText('LARA');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveStyle('width: 100px');
    expect(logoElement).toHaveStyle('height: 50px');
  });
});
