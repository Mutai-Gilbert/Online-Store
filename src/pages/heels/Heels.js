import React from 'react'
import data from '../../data/heels'
import { BsHeart } from 'react-icons/bs';

const Heels = () => {
        // eslint-disable-next-line
    const [items, setItems] = React.useState(data);
  return (
    <>
    <h1 className='pt-10 text-center font-bold text-4xl'> Heels</h1>
     <section className='p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {items.map((item) => {
            const {id, image, title, desc, category, type, price} = item
            return (
                <div key={id} className='bg-gray-200 rounded-lg'>
                    <img src={image} alt={title} className='rounded-t-lg w-max h-80'/>
                    <div className='flex items-center justify-between'>
                        <div className='px-5'>
                            <h2 className='font-bold mt-5 mb-1'>{title}</h2>
                        <p>{desc}</p>
                        </div>
                        <div className='px-5'>
                        < BsHeart title='Add to wishlist'  className='cursor-pointer'/>
                            
                        </div>
                    </div>
                    <div className='my-2 px-5'>
                        <small className='bg-green-500 rounded-full px-2 text-white tracking-widest mr-5' >{category}</small >
                        <small className='bg-green-500 rounded-full px-2 text-white tracking-widest mr-5' >{type}</small >
                    </div>
                    <p className='text-2xl px-5 pb-6'>$ {price}</p>

                </div>
            )
        })}
        </section> 
    </>
  )
}

export default Heels
