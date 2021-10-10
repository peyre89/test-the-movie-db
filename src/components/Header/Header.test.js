import { render } from 'customRender';
import Header from './Header';

test('Test Header', () => {
  const { container, getByTestId } = render(<Header />);

  const header = container.firstChild;
  expect(header).toHaveClass('Header');

  const ul = getByTestId('header-ul');
  expect(ul.childNodes.length).toEqual(3);
});
