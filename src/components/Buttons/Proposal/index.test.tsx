import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import ProposalButton from '.';

describe('ProposalButton', () => {
  it('Should render button with correct text', () => {
    const buttonText = 'Click me!';
    const { getByText } = render(<ProposalButton text={buttonText} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders button with correct icon', () => {
    const { getByTestId } = render(<ProposalButton icon={<div data-testid="test-icon" />} />);
    const iconElement = getByTestId('test-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('Should call onClick when button is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<ProposalButton text="Click me!" onClick={mockOnClick} />);
    const buttonElement = getByText('Click me!');

    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
