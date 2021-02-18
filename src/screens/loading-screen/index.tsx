import React from "react";

import styles from "./loading-screen.module.scss";

const LoadingScreen: React.VFC = () => {
  return (
    <svg viewBox="0 0 600 300" className={styles.root}>
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="50%">
          React Pokemon
        </text>
      </symbol>
      <use className={styles.text} xlinkHref="#s-text" />
      <use className={styles.text} xlinkHref="#s-text" />
      <use className={styles.text} xlinkHref="#s-text" />
      <use className={styles.text} xlinkHref="#s-text" />
      <use className={styles.text} xlinkHref="#s-text" />
    </svg>
  );
};

export default LoadingScreen;
