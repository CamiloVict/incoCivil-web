import React from 'react';
import { Outlet } from 'react-router-dom';

// *Components
import GlobalStyle from '../GlobalStyles';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import HomePage from '../Pages/Home/Home';

export default function Root(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <HomePage /> */}
      {/* // *Todo el default content */}
      {/* <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <form id='search-form' role='search'>
            <input id='q' aria-label='Search contacts' placeholder='Search' type='search' name='q' />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div> */}
      <Footer />
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}
