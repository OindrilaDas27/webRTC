import React from 'react';
import styles from './CallPage.module.css';
import CallPageHeader from '../../components/CallPageHeader/CallPageHeader';
import CallPageFooter from '../../components/CallPageFooter/CallPageFooter';
import MeetingInfo from '../../components/MeetingInfo/MeetingInfo';
import Messenger from '../../components/Messenger/Messenger';

const CallPage = () => {
  return (
    <div className={styles.callpage_container}>
      <video className={styles.video_container} src="" controls></video>
      <CallPageHeader />
      <CallPageFooter />
      <MeetingInfo />
      <Messenger />
    </div>
  )
}

export default CallPage