import React, { useState } from 'react';

const Filters = () => {


    const [selectedItems,setSelectedItems] = useState (1)
  return (
    <section className='mt-10 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around'>
        <button 
        onClick={() => setSelectedItems(1) } 
        className={`item ${ selectedItems === 1 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Latest
        </button>
        <button 
        onClick={() => setSelectedItems(2) }
        className={`item ${ selectedItems === 2 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Bestseller
        </button>
        <button 
        onClick={() => setSelectedItems(3) }
        className={`item ${ selectedItems === 3 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Special
        </button>
    </section>
  )
}

export default Filters;
