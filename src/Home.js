import React from 'react';
import Itemcard from './Itemcard';
import data from './data';
import {useState} from "react";

const Home = () => {
  const [query, setQuery] = useState("")
  return(
    <>
      <h1 className='text-center mt-3'>All Items</h1>
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)}/>
      <section className='py-4 container'>
          <div className='row justify-conternt-center'>
              {data.productData.filter(post => {
                  if (query === '') {
                    return post;
                  } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                    return post;
                  }
                }).map((item,index) =>{
                 return(
                    <Itemcard 
                        img={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price}
                        item={item} 
                        key={index} 
                    />
                 )
              })}
          </div>
      </section>
    </>
  );
};

export default Home;
