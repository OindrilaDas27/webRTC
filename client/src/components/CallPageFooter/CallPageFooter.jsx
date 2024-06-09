import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faClosedCaptioning, faDesktop, faMicrophone, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import styles from './CallPageFooter.module.css';

const CallPageFooter = () => {
  return (
    <div className={styles.footer_item}>
      <div className={styles.left_item}>
        <div className={styles.left_icon_block}>
          Meeting details
          <FontAwesomeIcon className={styles.left_icon} icon={faAngleUp} />
        </div>
      </div>
      <div className={styles.center_item}>
        <div
          className={`${styles.center_icon_block} ${styles.red_bg}`}
        >
          <FontAwesomeIcon
            className={styles.center_icon}
            icon={styles.faMicrophone}
          />
        </div>
        <div className={styles.center_icon_block} >
          <FontAwesomeIcon className={`${styles.center_icon} ${styles.red}`} red icon={faPhone} />
        </div>
        <div className={styles.center_icon_block}>
          <FontAwesomeIcon className={styles.center_icon} icon={faVideo} />
        </div>
      </div>
      <div className={styles.right_item}>
        <div className={styles.icon_block}>
          <FontAwesomeIcon className={`${styles.icon} ${styles.red}`}  icon={faClosedCaptioning} />
          <p className={styles.title}>Turn on captions</p>
        </div>
          <div className={styles.icon_block}>
            <FontAwesomeIcon className={styles.icon} red icon={faDesktop} />
            <p className={styles.title}>Stop presenting</p>
          </div>
          <div className={styles.icon_block}>
            <FontAwesomeIcon className={`${styles.icon} ${styles.red}`}  icon={faDesktop} />
            <p className={styles.title}>Present now</p>
          </div>
      </div>
    </div>
  )
}

export default CallPageFooter