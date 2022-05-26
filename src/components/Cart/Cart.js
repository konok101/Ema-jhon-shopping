import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total=0;
    let shipping= 0;
    for(const prosuct of cart){
        total=total+prosuct.price;
        shipping= shipping+ prosuct.shipping;
    }
    const tax= total*10/100;
    return (
        <div className='cart'>
            <h4>order summery</h4>
            <p>Selected item: {cart.length}</p>
            <p>Total price: {total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax:{tax} </p>
            <h4>Grand Total: </h4>
        </div>
    );
};

export default Cart;