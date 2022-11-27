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

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productos' element={<h1>Products</h1>} />
          <Route path='/servicios/' element={<Services />} />
          <Route path='/servicios/servicios-tecnicos/' element={<TechicalServicesPage />} />
          <Route path='/servicios/nuestros-profesionales/' element={<OurPros />} />
          <Route path="/servicios/servicios-tecnicos/:id" element={<Service/>} />
        </Routes>
      </Layout>
      <Outlet />
    </>
  );
}

export default App;
