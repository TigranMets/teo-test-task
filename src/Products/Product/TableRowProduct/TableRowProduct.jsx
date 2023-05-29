import React from 'react';
import editIcon from '../../../assets/images/editIcon.png';
import recycleBin from '../../../assets/images/recycle-bin.png'
import styles from './TableRowProduct.module.css';

const TableRowProduct = ({ selected, onCheckboxChange, name, vendorCode, quantity, price, handleDelete, setIsEditing }) => {
    return <tr>
        <td>
            <input type='checkbox' checked={selected}
                onChange={() => onCheckboxChange(vendorCode)} className={styles.productAddingCheckbox} />
            {name}
        </td>
        <td>{vendorCode}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td className={styles.editing}>
            <img className={styles.trashBin} src={recycleBin} alt='мусорка' width='20'
                onClick={() => handleDelete(vendorCode)} />
            <img src={editIcon} alt='кнопка редактирования' width='20' onClick={() => setIsEditing(true)} />
        </td>
    </tr>;
}

export default TableRowProduct;