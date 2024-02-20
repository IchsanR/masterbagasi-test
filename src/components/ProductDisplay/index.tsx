import React from 'react';
import dataDummy from '../../../dummy';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { addProduct } from '@/lib/slices/productSlices';
import { useDispatch } from 'react-redux';

const ProductDisplay = () => {
  const productData = dataDummy;
  const dispatch = useDispatch();

  const handleBuy = (
    { e, id, title, price, description, category, image, weight, quantity }:
      {
        e: React.MouseEvent<HTMLButtonElement>, id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        weight?: number,
        quantity: number;
      }) => {
    e.preventDefault();

    const boughtProduct = {
      id, title, price, description, category, image, weight, quantity
    };

    dispatch(addProduct(boughtProduct));
  };

  const ProductCard = () => {
    return (
      <div className='mb-20'>
        {productData.map((item, index) => (
          <Card key={index} className='my-4 shadow-[0_0_10px_rgba(0,0,0,0.3)] grid grid-cols-2'>
            <div className='m-auto'>
              <Image src={item.image} className='bg-contain' height={100} width={100} alt='Product Image' />
            </div>
            <div className='flex flex-col'>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h6">
                  {item.title}
                </Typography>
                <div className='flex justify-between'>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {`$ ${item.price}`}
                  </Typography>
                  <Button variant="outlined" size="small" color="error" type='button' onClick={(e) => handleBuy({
                    e, id: item.id, title: item.title, price: item.price, description: item.description, category: item.category, image: item.image, weight: item.weight, quantity: item.quantity
                  })}>
                    Buy
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    );
  };


  return (
    <section className='w-full max-w-md p-5'>
      <h1 className='font-bold text-5xl'>Product</h1>
      <ProductCard />
    </section>
  );
};

export default ProductDisplay;