"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "@nextui-org/react";
import { setViews } from '@/lib/action/viewsAction';
import { ProductWarehouse } from '@/lib/types/types';

const Warehouse = () => {
  const dispatch = useDispatch();
  const warehouse = useSelector((state: any) => state.product.warehouse);

  console.log(warehouse);

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    dispatch(setViews(value));
  };

  const WarehouseItems = () => {
    return (
      <div>
        {warehouse.map((item: ProductWarehouse, index: number) => (
          <div className='border-b w-full mb-4' key={index}>
            <div className='w-full mb-2'>
              <h1 className='font-bold text-xl'>{item.title}</h1>
            </div>
            <div className='flex justify-between'>
              <div>
                <h1>Estimasi Harga</h1>
                <p className='font-semibold'>{`Rp. ${item.totalPrice.toLocaleString('id-ID')}`}</p>
              </div>
              <div>
                <h1>Estimasi Berat</h1>
                <p className='font-semibold'>{item.totalWeight} kg</p>
              </div>
              <div>
                <h1>Jumlah Barang</h1>
                <p className='font-semibold'>{item.quantity} pcs</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className='p-5'>
      <div className='mb-3'>
        <Button onClick={(e) => handlePage(e)} className='text-center w-full py-3 rounded bg-orange-400 text-white font-bold' value="addWarehouse">Tambah Barang</Button>
      </div>
      <WarehouseItems />
    </section>
  );
};

export default Warehouse;
