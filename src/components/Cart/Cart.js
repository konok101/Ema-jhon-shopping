import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    let quantity=0;
    for (const product of cart) {
        quantity=quantity+ product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = total * 10 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>order summery</h4>
            <p>Selected item: {quantity}</p>
            <p>Total price: {total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax:{tax} </p>
            <h6>Grand Total: {grandTotal} </h6>
        </div>
    );
};

export default Cart;