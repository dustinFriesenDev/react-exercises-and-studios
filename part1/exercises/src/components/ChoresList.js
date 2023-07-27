import React from 'react';
import styles from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div className={styles.choresBody}>
         <h2 className={styles.choresHeading}>CHORES</h2>
         <p className={styles.choresText}>You have no chores listed. Either, well done, or you're not using this app appropriately.</p>;
      </div>
   );
}