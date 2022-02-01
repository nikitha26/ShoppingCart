import React from 'react';
import Itemcard from './Itemcard';
import data from './data';
import {useState} from "react";

const Home = () => {
  const [query, setQuery] = useState("")
  return(
    <>
      <section className='py-4 container'>
      <div className='row mt-3 mb-4'>
        <div className='col col-lg-1'></div>
        <div className='col col-lg-3 mt-3'>
          <input placeholder="Search" onChange={event => setQuery(event.target.value)}/>
        </div>
        <div className='col-lg-auto'>
          <h1 className='text-center'>Shopping Cart</h1>
        </div>
      </div>
        <div className='row justify-content-center'>
          {data.productData.filter(post => {
              if (query === '') {
                return post;
              } else if (post.title.toLowerCase().includes(query.toLowerCase()) || post.desc.toLowerCase().includes(query.toLowerCase())) {
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
              }
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
