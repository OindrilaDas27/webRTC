import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CallPageHeader.module.css';
import { faCommentAlt, faUserCircle, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const CallPageHeader = () => {
  return (
    <div className={styles.frame_header}>
      <div className={`${styles.header_items} ${styles.icon_block}`} >
        <FontAwesomeIcon className={styles.icon} icon={faUserFriends} />
      </div>
      <div className={`${styles.header_items} ${styles.icon_block}`}>
        <FontAwesomeIcon className={styles.icon} icon={faCommentAlt} />
        <span className={styles.alert_circle_icon}></span>
      </div>
      <div className={`${styles.header_items} ${styles.date_block}`} >1 PM</div>
      <div className={`${styles.header_items} ${styles.icon_block}`} >
        <FontAwesomeIcon className={`${styles.icon} ${styles.profile}`} icon={faUserCircle} />
      </div>
    </div>
  )
}

export default CallPageHeader