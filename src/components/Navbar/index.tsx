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
  const product = useSelector((state: any) => state.product.products);
  const warehouse = useSelector((state: any) => state.product.warehouse);

  const totalHargaProduct = product.reduce((acc: number, item: any, index: number) => {
    if (index === 0) {
      return item.totalPrice;
    } else {
      return acc + item.totalPrice;
    }
  }, 0);

  const totalHargaWarehouse = warehouse.reduce((acc: number, item: any, index: number) => {
    if (index === 0) {
      return item.totalPrice;
    } else {
      return acc + item.totalPrice;
    }
  }, 0);

  const totalSemua = totalHargaWarehouse + totalHargaProduct;
  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    dispatch(setViews(value));
  };

  const HomeNav = () => {
    return (
      <nav className='mx-auto w-full max-w-sm mb-3 fixed bottom-0 left-1/2 -translate-x-1/2 h-16 flex rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#FFF]'>
        <button className='m-auto' type='button' value="home" onClick={(e) => handlePage(e)}>
          <Image src={homeActive} className='m-auto' height={35} width={35} alt='Bag' />
          <h5 className={"text-red-600"}>Home</h5>
        </button>
        <button className='m-auto' type='button' value="bag" onClick={(e) => handlePage(e)}>
          <Image src={bag} className='m-auto' height={30} width={29} alt='Bag' />
          <h5 className={"text-black"}>Bag</h5>
        </button>
      </nav>
    );
  };

  const CheckoutButton = () => {
    return (
      <nav className='mx-auto w-full max-w-sm mb-3 fixed bottom-0 left-1/2 -translate-x-1/2 flex rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-[#FFF]'>
        <div className='w-full m-auto p-5'>
          <div className='flex justify-between'>
            <p>Total Harga Keranjang</p>
            <p className='font-bold'>{`Rp. ${totalHargaProduct.toLocaleString('id-ID')}`}</p>
          </div>
          <div className='flex justify-between'>
            <p>Total Harga Warehouse</p>
            <p className='font-bold'>{`Rp. ${totalHargaWarehouse.toLocaleString('id-ID')}`}</p>
          </div>
          <div className='flex justify-between mb-6'>
            <p>Total Harga Belanja</p>
            <p className='font-bold'>{`Rp. ${totalSemua.toLocaleString('id-ID')}`}</p>
          </div>
          <button className={product.length === 0 ? 'text-center w-full py-3 rounded-full bg-slate-500 text-slate-400 font-bold' : 'text-center w-full py-3 rounded-full bg-red-600 text-white font-bold'} disabled={product.length === 0}>
            CHECKOUT
          </button>
        </div>
      </nav>
    );
  };

  return (
    pageViews === "home" ? (
      <HomeNav />
    ) : pageViews === "bag" ? (
      <CheckoutButton />
    ) : <></>
  );
};

export default Navbar;