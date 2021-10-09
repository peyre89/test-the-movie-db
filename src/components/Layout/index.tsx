import Footer from 'components/Footer';
import Header from 'components/Header';

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
