import React from "react";

import styles from "./section-title.module.scss";

export interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.VFC<SectionTitleProps> = (props) => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>{props.title}</p>
      <h1 id="message-heading" className={styles.subtitle}>
        {props.subtitle}
      </h1>
    </div>
  );
};
