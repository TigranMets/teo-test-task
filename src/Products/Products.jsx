import React, { useState } from 'react';
import Product from './Product/Product';
import styles from './Products.module.css'

const Products = () => {

    const [products, setProducts] = useState([
        { name: 'Cactus', vendorCode: 7963, quantity: 13, price: '58$' },
        { name: 'Oreo', vendorCode: 8578, quantity: 1000, price: '1$' },
        { name: 'Iphone', vendorCode: 9701, quantity: 50, price: '1300$' }
    ]);

    const handleDelete = (vendorCode) => {
        setProducts(products.filter(product => product.vendorCode !== vendorCode));
    };

    const handleEdit = (vendorCode, updatedProduct) => {
        setProducts(products.map(product => {
            if (product.vendorCode === vendorCode) {
                return {
                    ...product,
                    ...updatedProduct
                };
            }
            return product;
        }));
    };

    return <div className={styles.products}>
        <button className={styles.addProduct}>+ Добавить Товар</button>
        <table>
            <thead>
                <tr>
                    <th>Наименовние</th>
                    <th>Артикул</th>
                    <th>Кол-во</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => <Product key={product.vendorCode} onEdit={handleEdit} handleEdit={handleEdit} handleDelete={handleDelete} name={product.name} quantity={product.quantity} vendorCode={product.vendorCode} price={product.price} />)
                }
            </tbody>
        </table>
    </div>
}

export default Products;
