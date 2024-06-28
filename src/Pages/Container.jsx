import React, { Children } from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Container = ({ children }) => {
  return (
    <div className=''>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Container