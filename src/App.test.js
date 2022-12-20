import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import App from './App';


it("renders without crashing", () => {
  render(<App />);
});

it("renders with checking the screen element", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Flowers/i);
  expect(linkElement[0]).toBeInTheDocument();
});

