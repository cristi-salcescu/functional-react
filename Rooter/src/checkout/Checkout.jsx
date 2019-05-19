import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../base.css";
import "./Checkout.css";

import Header from '../Header';
import ShoppingCart from '../components/ShoppingCartContainer';
import ShippingForm from './ShippingForm';

export default function Checkout({cart, onPlaceOrder}) {
  const [shipping, setShipping] = useState('');

  function updateShipping(newShipping){
    setShipping(newShipping);
  }

  function placeOrder(){
    const order = Object.freeze({
      shipping,
      cart
    });

    onPlaceOrder(order);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <ShoppingCart cart={cart} checkout="false" />
        </div>
        <div>
          <ShippingForm onSave={updateShipping}/>
        </div>    
      </div>
      <div className="checkout-navigation">
        <Link to="/"><button className="navigation-button">Back</button></Link>
        <Link to="/thankyou"><button className="navigation-button" onClick={placeOrder}>Place Order</button></Link>
      </div>
    </div>
  );
}
