import React from 'react';
import styles from './HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faVideo } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <div className={styles.home_page}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.action_btn}>
            <button className={`${styles.btn} ${styles.purple}`}>
              <FontAwesomeIcon className={styles.icon_block_video} icon={faVideo} />
              New Meeting
            </button>
            <div className={styles.input_block}>
              <div className={styles.input_section}>
                <FontAwesomeIcon className={styles.icon_block_keyboard} icon={faKeyboard} />
                <input type="text" placeholder='Enter a code or link' />
              </div>
              <button className={`${styles.btn} ${styles.no_bg}`}>Join</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage