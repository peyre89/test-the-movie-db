import { render } from '@testing-library/react';
import App from './App';

test('Test App', () => {
  const { container } = render(<App />);

  const app = container.firstChild;
  expect(app).toBeTruthy();
});
