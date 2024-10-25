 import React from 'react'
 
 const FruitsCard = ({fruit}) => {
   return (
     <div 
     className='rounded-lg overflow-hidden shadow-2xl transform group hover:scale-110 duration-100 relative'>
       <img className='w-full h-52 object-cover' 
       src={require(`../assests/${fruit.image}.jpeg`)} 
       alt={`${fruit.image}`}/>
       <div className='flex flex-col items-center my-2 space-y-1 '>
        <span className='font-body text-slate-500 block'>{fruit.name}</span>
        <span className='font-body text-slate-500'>₹{fruit.price}</span>
        <span className='font-body text-lime-400 text-xs uppercase invisible group-hover:visible'>Add to Cart</span>
       </div>
       <span className='absolute top-3 right-3 bg-sky-300 text-white rounded-lg text-sm border-sky-300 p-1'>1%off</span>
     </div>
   )
 }
 
 export default FruitsCard;
 