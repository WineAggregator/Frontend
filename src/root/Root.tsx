import React, { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import './RootDefault.css';
import { Wrapper } from '../components/Wrapper';
import './Root.module.css';

const Root:FC = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <div className='page'>
        <Header />
        <main className='main'>
          <Outlet />
        </main>
        <Footer/>
      </div>      
  </Wrapper>

  );
};

export default Root;