import Footer from 'components/Footer';
import Header from 'components/Header';

import Divider from '@mui/material/Divider';

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="Layout">
      <Header />
      <Divider sx={{ my: 4 }} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
