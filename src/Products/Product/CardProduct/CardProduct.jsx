import React from 'react';
import editIcon from '../../../assets/images/editIcon.png';
import recycleBin from '../../../assets/images/recycle-bin.png'
import saveIcon from '../../../assets/images/saveIcon.png'
import styles from './CardProduct.module.css';

const CardProduct = ({ onCheckboxChange, handleSave, handleDelete, name, quantity, vendorCode, price, setIsEditing, selected, isEditing, handleCancel, editedProduct, handleInputChange }) => {

    return <div className={styles.cardProduct}>
        <div className={styles.editingAndSelect}>
            <input type='checkbox' checked={selected}
                onChange={() => onCheckboxChange(vendorCode)} className={styles.productAddingCheckbox} />
            <img className={styles.trashBin} src={recycleBin} alt='мусорка' width='20'
                onClick={() => handleDelete(vendorCode)} />
            {isEditing ? <><img width='20' alt='кнопка сохранения'
                src={saveIcon} onClick={handleSave} />
                <span className={styles.closeButton} onClick={handleCancel}>X</span></> : <img src={editIcon} alt='кнопка редактирования' width='20' onClick={() => setIsEditing(true)} />}
        </div>
        {isEditing ?
            <div className={styles.productInformaton}>
                <div className={styles.productInformationItem}>
                    <span>Наименовние:</span>
                    <input name='name' value={editedProduct.name} onChange={handleInputChange} className={styles.editInput} />
                </div>
                <div className={styles.productInformationItem}>
                    <span>Артикул:</span>
                    <input name='vendorCode' value={editedProduct.vendorCode} onChange={handleInputChange} className={styles.editInput} />
                </div>
                <div className={styles.productInformationItem}>
                    <span>Кол-во:</span>
                    <input type='number' name='quantity' value={editedProduct.quantity} onChange={handleInputChange} className={styles.editInput} />
                </div>
                <div className={styles.productInformationItem}>
                    <span>Стоимость:</span>
                    <input name='price' value={editedProduct.price} onChange={handleInputChange} className={styles.editInput} />
                </div>
            </div>
            : <div className={styles.productInformaton}>
                <div className={styles.productInformationItem}>
                    <span>Наименовние:</span>
                    <span>{name}</span>
                </div>
                <div className={styles.productInformationItem}>
                    <span>Артикул:</span>
                    <span>{vendorCode}</span>
                </div>
                <div className={styles.productInformationItem}>
                    <span>Кол-во:</span>
                    <span>{quantity}</span>
                </div>
                <div className={styles.productInformationItem}>
                    <span>Стоимость:</span>
                    <span>{price}</span>
                </div>
            </div>
        }
    </div >;
}

export default CardProduct;