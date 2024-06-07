import React from 'react'
import styles from './Navbar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faExclamationCircle, faCog } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.header}>
            <span className={styles.text}>WebRTC</span>
        </div>
        <div className={styles.action_btn}>
            <FontAwesomeIcon className={styles.icon_block} icon={faQuestionCircle} />
            <FontAwesomeIcon className={styles.icon_block} icon={faExclamationCircle} />
            <FontAwesomeIcon className={styles.icon_block} icon={faCog} />
        </div>
    </div>
  )
}

export default Navbar