import React from 'react';
import { Link } from "react-router-dom";
import "../base.css";
import "./ThankYou.css";

import Header from '../Header';
export default function Checkout({cart}) {
  return (
    <div>
        <Header />
        <h3 className="thankyou-message">
            Thank you for your order! <Link to="/">Go back to shopping.</Link>
        </h3>
    </div>
  );
}
