import React from 'react';
 import styles from './NavBar.module.css'


function NavBar() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <span className={styles.logo}>
          <span className={styles.edyoda}>EDYODA</span>
          </span>
          <span className={styles.explore}>Explore Categories</span>
          <span className={styles.desc}>EdYoda is free learning and knowledge sharing platform for techie</span>
          <button>Go To Main Website</button>
          <div className={styles.stories}>stories</div>
      </div>
    </div>
  )
}

export default NavBar;
