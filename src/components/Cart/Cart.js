import React from 'react';
import './Cart.css'


const Cart = ({cart,setCart}) => {

  let message ;
  if(cart.length === 0){
    message =<p>Please buy at least one item!!!</p>
  }else{
    message = <p>Thanks for buy</p>
  }

  const removeItemCart = tShirt =>{
    const remaining=cart.filter(tS => tS._id !== tShirt._id)
  // console.log(tShirt)
  setCart(remaining)
  }
  
    return (
        <div>
          <h3 className={cart.length ===2 ? `orange`:'purple'}>Order Summary</h3>
          <h5 className={`blod ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h5>
          {
            cart.map(tShirt => <p 
            key={tShirt._id}
            >{tShirt.name}
            <button onClick={()=>removeItemCart(tShirt)}>X</button>
            </p>)
          }
          {
            message
          }
          {
            cart.length === 3 ? <p>Tin jon ke gift diba</p> : <p>kino kino </p>
          }
          {/* && operator */}
          {
             cart.length === 2 && <h3>Double Item</h3>
          }
          {/* <p>Or Operator ||</p> */}
         {
          cart.length === 4 || <div>4ta item nai</div>
         }
        </div>
    );
};

export default Cart;