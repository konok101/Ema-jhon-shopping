import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    useEffect(()=>{
        const storeCart= getStoreCart();
        const saveCart=[];
        for(const id in storeCart){
             const addedProduct= products.find(product=> product.id === id);
             if(addedProduct){
                const quantity=storeCart[id];
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct);

             }
        }
        setCart(saveCart)
    }, [products])

    const handleAddToCart = (selectProduct) => {

       let newCart= [];
        const exists= cart.find(product => product.id === selectProduct.id);
        if(!exists){
            selectProduct.quantity=1;
            newCart = [...cart, selectProduct];
        }
     else{
         const rest= cart.filter(product => product.id !== selectProduct.id);
         exists.quantity =exists.quantity +1;
         newCart =[...rest,exists]
     }
       
        setCart(newCart)
        addToDb(selectProduct.id)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">

                    {
                        products.map(product =>
                            <Product
                                product={product} key={product.id}
                                handleAddToCart={handleAddToCart}>

                            </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;