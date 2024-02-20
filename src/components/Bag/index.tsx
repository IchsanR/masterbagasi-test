import React, { useState } from 'react';
import Cart from './Cart';
import Warehouse from './Warehouse';

const Bag = () => {
  const [render, setRender] = useState<string>("cart");

  const SectionButton = () => {
    return (
      <div className='grid grid-cols-2 h-12 justify-stretch border-b-2'>
        <button type='button' onClick={() => setRender("cart")} className={render === "cart" ? 'my-auto text-center h-full grid place-items-center bg-orange-400 text-orange-700 font-bold' : 'my-auto text-center h-full grid place-items-center font-bold'}>
          Cart
        </button>
        <button type='button' onClick={() => setRender("warehouse")} className={render === "warehouse" ? 'my-auto text-center h-full grid place-items-center bg-orange-400 text-orange-700 font-bold' : "my-auto text-center h-full grid place-items-center font-bold"}>
          Warehouse
        </button>
      </div>
    );
  };

  const Views = () => {
    if (render === "cart") {
      return (
        <Cart />
      );
    } else {
      return (
        <Warehouse />
      );
    }
  };

  return (
    <section className="w-full max-w-md">
      <SectionButton />
      <Views />
    </section>
  );
};

export default Bag;