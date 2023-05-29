import React from 'react';
import recycleBin from '../../../assets/images/recycle-bin.png'
import saveIcon from '../../../assets/images/saveIcon.png'
import styles from './TableRowProductEditing.module.css';

const TableRowProductEditing = ({ onCheckboxChange, handleDelete, name, vendorCode, selected, handleSave, handleCancel, handleInputChange, editedProduct }) => {

    return <tr className={styles.product}>
        <td>
            <input type='checkbox' checked={selected}
                onChange={() => onCheckboxChange(vendorCode)} className={styles.productAddingCheckbox} />
            <input name='name' value={editedProduct.name} onChange={handleInputChange} />
        </td>
        <td><input name='vendorCode' value={editedProduct.vendoreCode} onChange={handleInputChange} /></td>
        <td><input type='number' name='quantity' value={editedProduct.quantity} onChange={handleInputChange} /></td>
        <td><input name='price' value={editedProduct.price} onChange={handleInputChange} /></td>
        <td className={styles.editing}>
            <img className={styles.trashBin} src={recycleBin} alt='мусорка' width='20'
                onClick={() => handleDelete(vendorCode)} />
            <img width='20' alt='кнопка сохранения'
                src={saveIcon} onClick={handleSave} />
            <span className={styles.closeButton} onClick={handleCancel}>X</span>
        </td>
    </tr >;
}

export default TableRowProductEditing;