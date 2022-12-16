import React from 'react';
import styles from './styles.module.scss';

const ItemCard = () => {
  return (
    <div className={styles.itemCard}>
      <div className={styles.imageBox}>Image area</div>
      <div className={styles.itemName}>Verka Paneer</div>
      <div className={styles.itemQuantity}>200 g</div>
      <div className={styles.footerContainer}>
        <div className={styles.price}>₹ 75</div>
        <div>
          <button className="addButton">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard();
