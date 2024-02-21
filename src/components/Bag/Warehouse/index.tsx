"use client";

import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "@nextui-org/react";
import { setViews } from '@/lib/action/viewsAction';

const Warehouse = () => {
  const dispatch = useDispatch();

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    dispatch(setViews(value));
  };

  return (
    <section>
      <div className='p-5'>
        <Button onClick={(e) => handlePage(e)} className='text-center w-full py-3 rounded bg-orange-400 text-white font-bold' value="addWarehouse">Tambah Barang</Button>
      </div>
    </section>
  );
};

export default Warehouse;
