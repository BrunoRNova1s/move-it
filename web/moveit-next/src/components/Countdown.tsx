import React from "react";
import styles from "../styles/components/Countdown.module.css";

export default function Countdown() {
  return (
    <div className={styles.countdownContainer}>
      <div>
        <span>2</span>
        <span>2</span>
      </div>
      <span>:</span>
      <div>
        <span>4</span>
        <span>4</span>
      </div>
    </div>
  );
}
