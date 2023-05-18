import React, { useState } from 'react';
import Product from './Product/Product';
import styles from './Products.module.css'

const Products = () => {

    const [products, setProducts] = useState([
        { name: 'Cactus', vendorCode: 7963, quantity: 13, price: '58$' }
    ]);

    return <div className={styles.products}>
        <table>
            <thead>
                <tr>
                    <th>Артикул</th>
                    <th>Кол-во</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => <Product key={product.vendorCode} name={product.name} quantity={product.quantity} vendorCode={product.vendorCode} price={product.price} />)
                }
            </tbody>
        </table>
    </div>
}

export default Products;
