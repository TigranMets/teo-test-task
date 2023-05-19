import React, { useState } from 'react';
import editIcon from '../../assets/images/editIcon.png';
import recycleBin from '../../assets/images/recycle-bin.png'
import saveIcon from '../../assets/images/saveIcon.png'
import styles from './Product.module.css';

const Product = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
        name: props.name,
        quantity: props.quantity,
        price: props.price
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return <tr className={styles.product}>
        <td>{isEditing ? (
            <input
                type="text"
                name="name"
                value={editedProduct.name}
                onChange={handleInputChange}
            />
        ) : (
            props.name
        )}</td>
        <td>{props.vendorCode}</td>
        <td>{isEditing ? (
            <input
                type='number'
                name='quantity'
                value={editedProduct.quantity}
                onChange={handleInputChange}
            />
        ) : (
            props.quantity
        )}</td>
        <td>{isEditing ? (
            <input
                type='text'
                name='price'
                value={editedProduct.price}
                onChange={handleInputChange}
            />
        ) : (
            props.price
        )}</td>
        <td className={styles.editing}>
            <img
                className={styles.trashBin}
                src={recycleBin}
                alt='мусорка'
                width='20'
                onClick={() => props.handleDelete(props.vendorCode)}
            />
            {isEditing ? (
                <>
                    <img width='20' alt='кнопка сохранения'
                        src={saveIcon} onClick={handleSave} />
                    <span className={styles.closeButton} onClick={handleCancel}>X</span>
                </>
            ) : (
                <img
                    src={editIcon}
                    alt='кнопка редактирования'
                    width='20'
                    onClick={handleEdit}
                />
            )}
        </td>
    </tr>
}

export default Product;