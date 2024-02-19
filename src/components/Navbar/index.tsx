"use client";
import Image from 'next/image';
import React from 'react';
import bag from '@/../public/bag.svg';
import home from '@/../public/home.svg';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { setViews } from '@/lib/action/viewsAction';

const Navbar: NextPage = () => {
  const dispatch = useDispatch();

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    dispatch(setViews(value));
  };
  return (
    <nav className='mx-auto w-full max-w-sm mb-3 fixed bottom-0 left-1/2 -translate-x-1/2 h-16 flex rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#FFF]'>
      <button className='m-auto' type='button' value="home" onClick={(e) => handlePage(e)}>
        <Image src={home} className='m-auto' height={35} width={35} alt='Bag' />
        <h5>Home</h5>
      </button>
      <button className='m-auto' type='button' value="bag" onClick={(e) => handlePage(e)}>
        <Image src={bag} className='m-auto' height={30} width={29} alt='Bag' />
        <h5>Bag</h5>
      </button>
    </nav>
  );
};

export default Navbar;