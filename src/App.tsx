import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

// *GlobalStyle
import GlobalStyle from './GlobalStyles';

//* Components
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<h1>Products</h1>} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Layout>
      <Outlet />
    </>
  );
}

export default App;
