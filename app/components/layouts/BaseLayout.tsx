'use client';

import SocialBar from '../shared/SocialBar';
import Footer from '../shared/Footer';
import { useState } from 'react';
import Header from '../shared/Header';

type BaseLayoutProps = {
  children: React.ReactNode;
  title: string;
  pageClass?: string;
};

const BaseLayout = ({ children, title, pageClass }: BaseLayoutProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`portfolio-app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header handleClick={handleClick} />
      <div>
        <div className={`base ${pageClass}`}>
          <div className='base_left'>
            <div className='text-right padding32 font-xl x-bold uppercase title'>{title}</div>
            <SocialBar />
          </div>
          <div className='base_right'>
            <div className='mobile-title dt_hide tb_hide uppercase top64 text-center bold font-xl default'>{title}</div>
            <div className='minHeightScreen'>{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
