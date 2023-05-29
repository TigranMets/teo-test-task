import React, { useState } from 'react';
import TableRowProduct from './TableRowProduct/TableRowProduct';
import TableRowProductEditing from './TableRowProductEditing/TableRowProductEditing';
import CardProduct from './CardProduct/CardProduct';

const Product = ({ onCheckboxChange, onEdit, handleDelete, name, quantity, vendorCode, price, selected, screenWidth }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
        name: name,
        vendorCode: vendorCode,
        quantity: quantity,
        price: price
    });

    const handleSave = () => {
        onEdit(vendorCode, editedProduct);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedProduct({
            name: name,
            quantity: quantity,
            price: price
        });
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return screenWidth > 770 ? isEditing ? <TableRowProductEditing onCheckboxChange={onCheckboxChange} handleDelete={handleDelete} name={name} vendorCode={vendorCode} selected={selected} setIsEditing={setIsEditing} handleSave={handleSave} handleCancel={handleCancel} handleInputChange={handleInputChange} editedProduct={editedProduct} />
        : <TableRowProduct onCheckboxChange={onCheckboxChange} handleDelete={handleDelete} name={name} quantity={quantity} vendorCode={vendorCode} price={price} selected={selected} setIsEditing={setIsEditing} /> :
        <CardProduct handleCancel={handleCancel} isEditing={isEditing} handleSave={handleSave} onCheckboxChange={onCheckboxChange} selected={selected} handleDelete={handleDelete} name={name} quantity={quantity} vendorCode={vendorCode} price={price} setIsEditing={setIsEditing} editedProduct={editedProduct}/>;
}

export default Product;