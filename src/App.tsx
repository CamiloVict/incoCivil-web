import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

// *GlobalStyle
import GlobalStyle from './GlobalStyles';

//* Components
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Services from './Pages/Services';
import TechicalServicesPage from './Pages/Services/TechnicalServices';
import OurPros from './Pages/Services/OurPros';
import Service from './Pages/Services/TechnicalServices/Service';
import Imports from './Pages/Imports';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/productos' element={<h1>Products</h1>} /> */}
          <Route path='/servicios/' element={<Services />} />
          <Route path='/servicios/servicios-tecnicos/' element={<TechicalServicesPage />} />
          <Route path="/servicios/servicios-tecnicos/:id" element={<Service />} />
          <Route path='/servicios/nuestros-profesionales/' element={<OurPros />} />
          <Route path='/servicios/nuestros-profesionales/:pro' element={<OurPros />} />
          <Route path='/importaciones' element={<Imports />} />
          <Route path='/importaciones/:imp' element={<Imports />} />
          <Route path='/contacto/' element={<Contact />} />
        </Routes>
      </Layout>
      <Outlet />
    </>
  );
}

export default App;
