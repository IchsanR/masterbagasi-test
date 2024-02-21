import { setViews } from '@/lib/action/viewsAction';
import { addWarehouse } from '@/lib/slices/productSlices';
import { ProductWarehouse } from '@/lib/types/types';
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddWarehouse = () => {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    weight: 0,
    quantity: 0
  });
  const [totalWeight, setTotalWeight] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      form.title.trim() === '' ||
      form.price === 0 ||
      form.weight === 0 ||
      form.quantity === 0
    ) {
      return;
    }

    const data: ProductWarehouse = {
      id: Date.now(),
      title: form.title,
      price: form.price,
      weight: form.weight,
      quantity: form.quantity,
      totalWeight: form.weight * form.quantity,
      totalPrice: form.price * form.weight * form.quantity
    };

    dispatch(addWarehouse(data));
    dispatch(setViews("bag"));
    setForm({
      title: "",
      price: 0,
      weight: 0,
      quantity: 0
    });
  };

  const handleTitle = (e: any) => {
    setForm({ ...form, title: e.target.value });
  };

  const handlePrice = (e: any) => {
    const price = parseInt(e.target.value);
    setForm({ ...form, price: price });
    if (!isNaN(price) && !isNaN(form.weight) && !isNaN(form.quantity)) {
      setTotalPrice(price * form.weight * form.quantity);
    } else {
      setTotalPrice(0);
    }
  };

  const handleWeight = (e: any) => {
    const weight = parseFloat(e.target.value);
    setForm({ ...form, weight: weight });
    if (!isNaN(form.price) && !isNaN(weight) && !isNaN(form.quantity)) {
      setTotalWeight(weight * form.quantity);
      setTotalPrice(form.price * weight * form.quantity);
    } else {
      setTotalWeight(0);
      setTotalPrice(0);
    }
  };

  const handleQuantity = (e: any) => {
    const quantity = parseInt(e.target.value);
    setForm({ ...form, quantity: quantity });
    if (!isNaN(form.price) && !isNaN(form.weight) && !isNaN(quantity)) {
      setTotalWeight(form.weight * quantity);
      setTotalPrice(form.price * form.weight * quantity);
    } else {
      setTotalWeight(0);
      setTotalPrice(0);
    }
  };

  return (
    <div className='w-full p-5'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          autoFocus
          label="Nama Barang"
          required
          placeholder="Masukkan Nama Barang"
          variant="underlined"
          onChange={(e) => handleTitle(e)}
          className='w-full'
        /><Input
          startContent={
            <p>Rp.</p>
          }
          label="Harga"
          placeholder="0"
          required
          type='number'
          variant="underlined"
          onChange={(e) => handlePrice(e)}
        />
        <div className='flex'>
          <Input
            endContent={
              <p>kg</p>
            }
            label="Berat barang /pcs"
            placeholder="0"
            required
            type='number'
            variant="underlined"
            onChange={(e) => handleWeight(e)}
          />
          <Input
            label="Jumlah Barang"
            required
            type='number'
            placeholder="0"
            variant="underlined"
            onChange={(e) => handleQuantity(e)}
          />
        </div>
        <div className='mt-5'>
          <div className='flex justify-between'>
            <h3>Total Berat Barang</h3>
            <p className='font-bold'>{totalWeight} kg</p>
          </div>
          <div className='flex justify-between'>
            <h3>Total Harga Barang</h3>
            <p className='font-bold'>Rp. {totalPrice.toLocaleString('id-ID')}</p>
          </div>
        </div>
        <div className='w-full mt-5 flex flex-row-reverse'>
          <Button variant="flat" color="primary" type='submit' className='w-full'>
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddWarehouse;