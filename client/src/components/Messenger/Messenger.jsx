import React from 'react'
import styles from './Messenger.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faPaperPlane, faTimes, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Messenger = () => {
  return (
    <div className={styles.messenger_container}>
      <div className={styles.messenger_header}>
        <h3>Meeting details</h3>
        <FontAwesomeIcon className={styles.time_icon} icon={faTimes} />
      </div>

      <div className={styles.messenger_header_tabs}>
        <div className={styles.tab}>
          <FontAwesomeIcon className={styles.frns_icon} icon={faUserFriends} /> 
          <p>People (1)</p>
        </div>
        <div className={`${styles.tab} ${styles.active}`} >
          <FontAwesomeIcon className={styles.cmt_icon} icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className={styles.chat_section}>
          <div className={styles.chat_block}>
            <div className={styles.sender}> Ame <small>10pm</small>
            </div>
            <p className={styles.msg}>Random msg for now</p>
          </div>
      </div>

      <div className={styles.send_msg_section}>
        <input placeholder='Send a message to everyone' />
        <FontAwesomeIcon className={styles.send_icon} icon={faPaperPlane} />
      </div>
    </div>
  )
}

export default Messenger