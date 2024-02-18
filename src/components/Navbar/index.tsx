import Image from 'next/image';
import React from 'react';
import bag from '@/../public/bag.svg';
import { NextPage } from 'next';

const Navbar: NextPage = () => {
  return (
    <nav className='mx-auto w-full max-w-md fixed bottom-0 h-16 flex rounded-t-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#FFF]'>
      <div className='my-auto mx-auto'>
        <Image src={bag} height={30} width={29} alt='Bag' />
        <h5>Bag</h5>
      </div>
    </nav>
  );
};

export default Navbar;