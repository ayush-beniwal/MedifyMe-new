import React, { useState } from 'react';
import styles from './Burger.module.css'
import {Link} from'react-router-dom'
import Account from "../../assets/account.svg";

const Burger = (patient) => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <div className={open ? styles.show : styles.burger} onClick={() => setOpen(!open)}>
          <div/>
          <div/>
          <div/>
        </div>
        <ul className={open ? styles.ul : styles.open}>
        <li><Link to="/health_history">Health History</Link></li>
        <li><Link to="/prescription">Prescriptions</Link></li>
        <li><Link to="/test">Tests & Reports</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li>
            <div className={styles.signIn}>
                {!patient.isLoggedIn ? (
                  <Link to="/login">Sign In</Link>
                ) : (
                  <Link to="/settings/account">Account</Link>
                )}
            </div>
        </li>
      </ul>
      </>
    )
  }
  
  export default Burger;