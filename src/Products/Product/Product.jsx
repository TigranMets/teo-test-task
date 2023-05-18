import React from 'react';
import styles from './Product.module.css'

const Product = (props) => {
    return <tr className={styles.product}>
        <td>{props.name}</td>
        <td>{props.vendorCode}</td>
        <td>{props.quantity}</td>
        <td>{props.price}</td>
    </tr>
}

export default Product;