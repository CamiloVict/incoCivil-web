import React from 'react';

// *Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { WhatsappIcon } from '../WhatsappIcon/WhatsappIcon'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div style={{paddingBottom: '140px'}}>
      {children}
      </div>
      <WhatsappIcon />
      <Footer />
    </>
  );
};

export default Layout;
