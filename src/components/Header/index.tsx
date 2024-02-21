"use client";
import React from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useDispatch, useSelector } from 'react-redux';
import { setViews } from '@/lib/action/viewsAction';

const Header = () => {
  const dispatch = useDispatch();
  const pageViews = useSelector((state: any) => state.pages.pageViews);

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    dispatch(setViews(value));
  };


  const HeaderDisplay = () => {
    return (
      <>
        <button className='m-auto' value={pageViews === "addWarehouse" ? "bag" : "home"} onClick={(e) => handleBack(e)} type='button'>
          {pageViews === "home" ? <></> : <ArrowBackIosRoundedIcon />}
        </button>
        <h1 className='m-auto font-bold grid-cols-3'>
          {pageViews === "bag" || pageViews === "inventory" ? "BAG" : pageViews === "addWarehouse" ? "WAREHOUSE" : "HOME"}
        </h1>
      </>
    );
  };

  return (
    <header className='p-3 mx-auto grid grid-cols-3 w-full max-w-md mb-3 sticky z-50 top-0 h-16 shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-white'>
      <HeaderDisplay />
    </header>
  );
};

export default Header;