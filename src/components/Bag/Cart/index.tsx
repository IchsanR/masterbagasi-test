"use client";

import { Box, Checkbox, Container, FormControlLabel, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { deleteAll, deleteProduct, updateQuantity } from "@/lib/slices/productSlices";
import Image from "next/image";

const Cart = () => {
  const product = useSelector((state: any) => state.product);
  const [checked, setChecked] = useState<boolean[]>(Array(product.length).fill(false));
  const [parentChecked, setParentChecked] = useState<boolean>(false);
  const [parentDisabled, setParentDisabled] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setChecked(Array(product.length).fill(false));
    setParentChecked(false);
    setParentDisabled(product.length === 0);
  }, [product]);

  const handleChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    setParentChecked(newChecked.every(item => item));
  };

  const handleParentChange = () => {
    const newParentChecked = !parentChecked;
    setParentChecked(newParentChecked);
    setChecked(Array(product.length).fill(newParentChecked));
  };

  const handleDecrease = (productId: number) => {
    dispatch(updateQuantity({ productId, quantity: -1 }));
  };

  const handleIncrease = (productId: number) => {
    dispatch(updateQuantity({ productId, quantity: 1 }));
  };

  const handleDeleteItem = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  const Children = () => {
    return (
      <div>
        {product.length > 0 ? product.map((item: any, index: number) => (
          <Box className="p-3 border flex" key={index}>
            <Checkbox checked={checked[index]} onChange={() => handleChange(index)}
            />
            <Box className="flex w-full">
              <Box className="mr-3 relative w-20 h-20 overflow-hidden">
                <Image src={item.image} fill alt={item.title} className="object-contain" />
              </Box>
              <Box className="w-full">
                <Typography variant="subtitle1" color={"black"} fontWeight={"bold"}>{item.title}</Typography>
                <Box className="flex justify-between w-full">
                  <Typography variant="subtitle1" className="text-red-600 font-semibold">$ {item.price * item.quantity}</Typography>
                  <Typography variant="subtitle1" className="font-semibold">{item.weight} kg</Typography>
                </Box>
                <Box className="flex w-full">
                  <Box className="grid grid-cols-3 w-32 mr-8">
                    <button className="rounded bg-slate-300 font-semibold w-8 h-8 mr-4" type="button" onClick={() => handleDecrease(item.id)} disabled={item.quantity === 1}>-</button>
                    <Typography variant="subtitle1" className="my-auto font-bold text-center">{item.quantity}</Typography>
                    <button className="rounded bg-slate-300 font-semibold w-8 h-8 ml-4" type="button" onClick={() => handleIncrease(item.id)}>+</button>
                  </Box>
                  <button type="button" onClick={() => handleDeleteItem(item.id)}><DeleteRoundedIcon color="error" /></button>
                </Box>
              </Box>
            </Box>
          </Box>
        )) : null}
      </div>
    );
  };


  return (
    <section className="pb-20">
      <div className="grid grid-cols-2 p-2">
        <FormControlLabel
          label="Pilih Semua"
          className="m-auto"
          control={
            <Checkbox
              checked={parentChecked}
              onChange={handleParentChange}
              disabled={parentDisabled}
            />
          }
        />
        <button type="button" className="flex m-auto" onClick={handleDeleteAll}>
          <DeleteRoundedIcon color="error" />
          <p className="text-red-700 font-bold">Hapus Semua</p>
        </button>
      </div>
      <Children />
    </section>
  );
};

export default Cart;