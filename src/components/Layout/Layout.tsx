import Footer from 'components/Footer';
import Header from 'components/Header';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Header />
      <Divider sx={{ my: 4 }} />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
