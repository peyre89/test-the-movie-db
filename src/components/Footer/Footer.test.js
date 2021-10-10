import { render } from 'customRender';
import Footer from './Footer';

test('Test Footer', () => {
  const { container, getByTestId } = render(<Footer />);

  const footer = container.firstChild;
  expect(footer).toHaveClass('Footer');

  const link = getByTestId('footer-a');
  expect(link).toHaveAttribute(
    'href',
    'https://github.com/peyre89/test-the-movie-db'
  );
});
