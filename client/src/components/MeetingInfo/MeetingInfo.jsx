import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MeetingInfo.module.css';
import { faCopy, faShieldAlt, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

const MeetingInfo = () => {
  return (
    <div className={styles.meeting_info_block}>
      <div className={styles.meeting_header}>
        <h3>Your meeting's ready</h3>
        <FontAwesomeIcon className={styles.timees_icon} icon={faTimes} />
      </div>
      <button className={styles.add_people_btn}>
        <FontAwesomeIcon className={styles.user_icon} icon={faUser} />
        Add Others
      </button>
      <p className={styles.info_text}>
        Or share this meeting link with others you want in the meeting
      </p>
      <div className={styles.meet_link}>
        <span>random url for now</span>
        <FontAwesomeIcon className={styles.copy_icon} icon={faCopy} />
      </div>
      <div className={styles.permission_text}>
        <FontAwesomeIcon className={`${styles.shield_icon} ${styles.red}`}  icon={faShieldAlt} />
        <p className={styles.small_text}>
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className={styles.small_text}>Joined as akshay@gmail.com</p>
    </div>
  )
}

export default MeetingInfo