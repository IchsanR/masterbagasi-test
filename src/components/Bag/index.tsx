import React, { useState } from 'react';
import Cart from './Cart';
import Warehouse from './Warehouse';
import { useSelector } from 'react-redux';

const Bag = () => {
  const [render, setRender] = useState<string>("cart");
  const product = useSelector((state: any) => state.product.products);
  const warehouse = useSelector((state: any) => state.product.warehouse);


  const SectionButton = () => {
    return (
      <div className='grid grid-cols-2 h-12 justify-stretch border-b-2'>
        <button type='button' onClick={() => setRender("cart")} className={render === "cart" ? 'my-auto text-center h-full grid place-items-center bg-orange-400 text-white font-bold' : 'my-auto text-center h-full grid place-items-center font-bold'}>
          {`Keranjang (${product.length})`}
        </button>
        <button type='button' onClick={() => setRender("warehouse")} className={render === "warehouse" ? 'my-auto text-center h-full grid place-items-center bg-orange-400 text-white font-bold' : "my-auto text-center h-full grid place-items-center font-bold"}>
          {`Warehouse (${warehouse.length})`}
        </button>
      </div>
    );
  };

  const Views = () => {
    if (render === "cart") {
      return (
        <Cart />
      );
    } else if (render === "warehouse") {
      return (
        <Warehouse />
      );
    }
  };

  return (
    <section className="w-full max-w-md pb-52">
      <SectionButton />
      <Views />
    </section>
  );
};

export default Bag;