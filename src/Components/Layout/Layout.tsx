import React from 'react';

// *Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { WhatsappIcon } from '../WhatsappIcon/WhatsappIcon'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <WhatsappIcon />
      <Footer />
    </>
  );
};

export default Layout;
