import React, { startTransition, useState } from 'react';
import recycleBin from '../assets/images/recycle-bin.png'
import Product from './Product/Product';
import styles from './Products.module.css'

const Products = () => {

    const [products, setProducts] = useState([
        { name: 'Cactus', vendorCode: 7963, quantity: 13, price: '58$', selected: false },
        { name: 'Oreo', vendorCode: 8578, quantity: 1000, price: '1$', selected: false },
        { name: 'Iphone', vendorCode: 9701, quantity: 50, price: '1300$', selected: false },
        { name: 'Sunflower', vendorCode: 5672, quantity: 20, price: '12$', selected: false },
        { name: 'Chips', vendorCode: 3289, quantity: 500, price: '2$', selected: false },
        { name: 'Samsung Galaxy', vendorCode: 6893, quantity: 30, price: '1100$', selected: false },
        { name: 'Tulip', vendorCode: 2376, quantity: 8, price: '9$', selected: false },
        { name: 'Cookies', vendorCode: 1254, quantity: 800, price: '3$', selected: false },
        { name: 'Google Pixel', vendorCode: 4829, quantity: 25, price: '900$', selected: false },
        { name: 'Rose', vendorCode: 7685, quantity: 15, price: '7$', selected: false },
        { name: 'Potato Chips', vendorCode: 6572, quantity: 100, price: '1$', selected: false },
    ]);

    const [selectedProducts, setSelectedProducts] = useState(0);

    const handleDelete = (vendorCode) => {
        setProducts(products.filter(product => product.vendorCode !== vendorCode));
    };

    const handleCheckboxChange = (vendorCode) => {
        const updatedProducts = products.map(product => {
            if (product.vendorCode === vendorCode) {
                return {
                    ...product,
                    selected: !product.selected
                };
            }
            return product;
        });
        setProducts(updatedProducts);
        setSelectedProducts(updatedProducts.filter(product => product.selected).length);
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

    const handleCancel = () => {
        setProducts(products.map(product => ({
            ...product,
            selected: false
        })));
        setSelectedProducts(0);
    };

    return <div className={styles.products}>
        <button className={styles.addProduct}>+ Добавить Товар</button>
        {selectedProducts > 0 && (
            <div className={styles.quantityOfSelectedProducts}>
                <span>{selectedProducts} вибран</span>
                <img className={styles.trashBin} src={recycleBin} alt='мусорка' width='20' onClick={handleCancel} />
            </div>
        )}
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
                {products.map((product) => (
                    <Product
                        onCheckboxChange={handleCheckboxChange}
                        onEdit={handleEdit}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        name={product.name}
                        quantity={product.quantity}
                        vendorCode={product.vendorCode}
                        price={product.price}
                        selected={product.selected}
                    />
                ))}
            </tbody>
        </table>
    </div>
}

export default Products;
