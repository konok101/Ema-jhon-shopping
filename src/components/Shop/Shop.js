import React, { useEffect, useState } from 'react';
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

    const handleAddToCart = (product) => {
        console.table(product)
        const newCart = [...cart, product];
        setCart(newCart)
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