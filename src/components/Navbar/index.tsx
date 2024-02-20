"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import bag from '@/../public/bag.svg';
import homeActive from '@/../public/home_active.svg';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { setViews } from '@/lib/action/viewsAction';

const Navbar: NextPage = () => {
  const dispatch = useDispatch();
  const pageViews = useSelector((state: any) => state.pages.pageViews);
  const product = useSelector((state: any) => state.product);

  const totalHargaProduct = product.reduce((acc: number, item: any, index: number) => {
    if (index === 0) {
      // Jika ini adalah item pertama, maka total awal adalah harga produk ini
      return item.totalPrice;
    } else {
      // Jika ini bukan item pertama, maka total adalah total sebelumnya ditambah harga produk ini
      return acc + item.totalPrice;
    }
  }, 0);


  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    dispatch(setViews(value));
  };

  const HomeNav = () => {
    return (
      <>
        <button className='m-auto' type='button' value="home" onClick={(e) => handlePage(e)}>
          <Image src={homeActive} className='m-auto' height={35} width={35} alt='Bag' />
          <h5 className={"text-red-600"}>Home</h5>
        </button>
        <button className='m-auto' type='button' value="bag" onClick={(e) => handlePage(e)}>
          <Image src={bag} className='m-auto' height={30} width={29} alt='Bag' />
          <h5 className={"text-black"}>Bag</h5>
        </button>
      </>
    );
  };

  const CheckoutButton = () => {
    return (
      <div className='w-full m-auto p-5'>
        <div className='flex justify-between'>
          <p>Total Harga Keranjang</p>
          <p className='font-bold'>{`Rp. ${totalHargaProduct.toLocaleString('id-ID')}`}</p>
        </div>
        <div className='flex justify-between'>
          <p>Total Harga Warehouse</p>
          <p>Test</p>
        </div>
        <div className='flex justify-between mb-6'>
          <p>Total Harga Belanja</p>
          <p>Test</p>
        </div>
        <button className={product.length === 0 ? 'text-center w-full py-3 rounded-full bg-slate-500 text-slate-400 font-bold' : 'text-center w-full py-3 rounded-full bg-red-600 text-white font-bold'} disabled={product.length === 0}>
          CHECKOUT
        </button>
      </div>
    );
  };

  return (
    <nav className={pageViews === 'home' ? 'mx-auto w-full max-w-sm mb-3 fixed bottom-0 left-1/2 -translate-x-1/2 h-16 flex rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#FFF]'
      : 'mx-auto w-full max-w-sm mb-3 fixed bottom-0 left-1/2 -translate-x-1/2 flex rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#FFF]'}>
      {pageViews === 'home' ? (
        <HomeNav />
      ) : (
        <CheckoutButton />
      )}
    </nav>
  );
};

export default Navbar;