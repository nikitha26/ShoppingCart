import React from 'react';
import {useCart} from 'react-use-cart';

const Cart = () => {
  const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart
  } = useCart();
  if(isEmpty) return <h4 className='text-center'>Your cart is empty</h4>
  return(
      <section className='py-4 container'>
          <div className='row justify-content-center'>
              <div className='col-12'>
                    <div><i className="fas fa-shopping-cart"></i>
                      <span className='badge rounded-pill bg-success'>{totalItems}</span>
                    </div>
                  <table className='table table-light table-hover m-0'>
                      {/* <thead>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th>Price</th>
                      </thead> */}
                      <tbody>
                            {items.map((item,index) => {
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{height:'6rem'}}/>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>Qty: {item.quantity}</td>
                                        <td>
                                            <button 
                                                className='btn btn-success ms-2 btn-sm'
                                                onClick={() => updateItemQuantity(item.id,item.quantity-1)}
                                            ><i className="fas fa-minus"></i></button>
                                            <button 
                                                className='btn btn-success ms-2 btn-sm'
                                                onClick={() => updateItemQuantity(item.id,item.quantity+1)}
                                            ><i className="fas fa-plus"></i></button>
                                            <button 
                                                className='btn btn-danger ms-2 btn-sm'
                                                onClick={() => removeItem(item.id)}
                                            ><i className="far fa-trash-alt"></i></button>
                                        </td>
                                        <td>${item.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>    
                  </table>
              </div>
              <div className='col-auto ms-auto'>
                  <button 
                    className='btn btn-danger m-2'
                    onClick={() => emptyCart()}
                  >Clear Cart</button>
                  <button className='btn btn-primary'>Buy Now</button>
              </div>
              <div className='col-auto m-3'>
                  <h6>Total ({totalItems}items):$ {cartTotal}</h6>
              </div>
          </div>
      </section>
  );
};

export default Cart;
