import React from 'react'
import styles  from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Gagan</h1>
      <button className={styles.btn}>Save</button>
    </div>
  )
}

export default Header
