import React from 'react'
import Header from './Header';
import Footer from './Footer';
import CTA from './CTA';

const MainLayout = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
        <CTA />
    </div>
  )
}

export default MainLayout
