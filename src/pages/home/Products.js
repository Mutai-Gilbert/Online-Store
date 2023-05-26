import React from 'react';
import data from  '../../data/products';


const Products = () => {
    const [items, setItems] = React.useState(data);
    console.log(items)
  return (
    <>
     <section>
        {items.map((item) => {
            const {id, image, title, desc, category, type, price} = item
            return (
                <div key={id}>
                    <img src={image} alt={title}/>
                    <p>{desc}</p>
                    <div>
                        <small>{category}</small>
                        <small>{type}</small>
                    </div>
                    <p>{price}</p>

                </div>
            )
        })}
        </section> 
    </>
  )
}

export default Products
