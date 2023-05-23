import React, { useState } from 'react';
import editIcon from '../../assets/images/editIcon.png';
import recycleBin from '../../assets/images/recycle-bin.png'
import saveIcon from '../../assets/images/saveIcon.png'
import styles from './Product.module.css';

const Product = props => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
        name: props.name,
        quantity: props.quantity,
        price: props.price
    });

    const handleSave = () => {
        props.onEdit(props.vendorCode, editedProduct);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedProduct({
            name: props.name,
            quantity: props.quantity,
            price: props.price
        });
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return isEditing ? <tr className={styles.product}>
        <td>
            <input type='checkbox' checked={props.selected}
                onChange={() => props.onCheckboxChange(props.vendorCode)} className={styles.productAddingCheckbox} />
            {props.name}
        </td>
        <td><input
            name="name"
            value={editedProduct.name}
            onChange={handleInputChange}
        /></td>
        <td><input type='number' name='quantity' value={editedProduct.quantity} onChange={handleInputChange} /></td>
        <td><input name='price' value={editedProduct.price} onChange={handleInputChange} /></td>
        <td className={styles.editing}>
            <img className={styles.trashBin} src={recycleBin} alt='мусорка' width='20'
                onClick={() => props.handleDelete(props.vendorCode)} />
            <img width='20' alt='кнопка сохранения'
                src={saveIcon} onClick={handleSave} />
            <span className={styles.closeButton} onClick={handleCancel}>X</span>
        </td>

    </tr >
        : <tr>
            <td>
                <input type='checkbox' checked={props.selected}
                    onChange={() => props.onCheckboxChange(props.vendorCode)} className={styles.productAddingCheckbox} />
                {props.name}
            </td>
            <td>{props.vendorCode}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
            <td className={styles.editing}>
                <img className={styles.trashBin} src={recycleBin} alt='мусорка' width='20'
                    onClick={() => props.handleDelete(props.vendorCode)} />
                <img src={editIcon} alt='кнопка редактирования' width='20' onClick={() => setIsEditing(true)} />
            </td>
        </tr>;
}

export default Product;