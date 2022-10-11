import React from 'react';

// *Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
