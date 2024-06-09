import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NoMatch.module.css';
import Navbar from '../../components/Navbar/Navbar'

const NoMatch = () => {
  return (
    <div className={styles.no_match}>
      <Navbar />
      <div className={styles.no_match__content}>
        <h2>Invalid video call name.</h2>
        <div className={styles.action_btn}>
          <Link className={styles.btn} to='/'>
            Return to home screen
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NoMatch