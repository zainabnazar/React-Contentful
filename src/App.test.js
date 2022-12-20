import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import App from './App';


it("renders without crashing", () => {
  render(<App />);
});

it("renders with checking the flower element", () => {
  render(<App />);
  const flowerElement = screen.getAllByText(/Flowers/i);
  expect(flowerElement[0]).toBeInTheDocument();
});

