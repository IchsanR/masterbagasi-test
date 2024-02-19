"use client";
import Image from 'next/image';
import React from 'react';
import bag from '@/../public/bag.svg';
import home from '@/../public/home.svg';
import homeActive from '@/../public/home_active.svg';
import bagActive from '@/../public/activated.svg';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { setViews } from '@/lib/action/viewsAction';

const Navbar: NextPage = () => {
  const dispatch = useDispatch();
  const pageViews = useSelector((state: any) => state.pages.pageViews);


  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    dispatch(setViews(value));
  };


  return (
    <nav className='mx-auto w-full max-w-sm mb-3 fixed bottom-0 left-1/2 -translate-x-1/2 h-16 flex rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#FFF]'>
      <button className='m-auto' type='button' value="home" onClick={(e) => handlePage(e)}>
        <Image src={pageViews === "home" ? homeActive : home} className='m-auto' height={35} width={35} alt='Bag' />
        <h5 className={pageViews === "home" ? "text-red-600" : "text-black"}>Home</h5>
      </button>
      <button className='m-auto' type='button' value="bag" onClick={(e) => handlePage(e)}>
        <Image src={pageViews === "bag" ? bagActive : bag} className='m-auto' height={30} width={29} alt='Bag' />
        <h5 className={pageViews === "bag" ? "text-red-600" : "text-black"}>Bag</h5>
      </button>
    </nav>
  );
};

export default Navbar;