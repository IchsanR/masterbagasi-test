"use client";

import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { deleteProduct, updateQuantity } from "@/lib/slices/productSlices";
import Image from "next/image";

const Cart = () => {
  const product = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();

  const handleDecrease = (productId: number) => {
    dispatch(updateQuantity({ productId, quantity: -1 }));
  };

  const handleIncrease = (productId: number) => {
    dispatch(updateQuantity({ productId, quantity: 1 }));
  };

  const handleDeleteItem = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  const NoProduct = () => {
    return (
      <h1 className="text-center font-bold text-lg mt-10">Tidak Ada Product</h1>

    );
  };

  const Children = () => {
    return (
      <div>
        {product.length > 0 ? product.map((item: any, index: number) => (
          <Box className="p-3 border flex" key={index}>
            <Box className="flex w-full">
              <Box className="mr-3 relative w-20 h-20 overflow-hidden">
                <Image src={item.image} fill alt={item.title} className="object-contain" />
              </Box>
              <Box className="w-full">
                <Typography variant="subtitle1" color={"black"} fontWeight={"bold"}>{item.title}</Typography>
                <Box className="flex justify-between w-full">
                  <Typography variant="subtitle1" className="text-red-600 font-semibold">Rp. {item.totalPrice.toLocaleString('id-ID')}</Typography>
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
        )) : (<NoProduct />)}
      </div>
    );
  };


  return (
    <section>
      <Children />
    </section>
  );
};

export default Cart;