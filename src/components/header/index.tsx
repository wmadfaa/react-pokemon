import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../section-title";
import { Button } from "../ui/button";

import styles from "./header.module.scss";

export const Header: React.VFC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.content}>
        <SectionTitle title="created by" subtitle="wasim almadfaa" />
        <div className={styles.actions}>
          <a href="https://github.com/wmadfaa/react-pokemon" target="_blank">
            <Button>github</Button>
          </a>
        </div>
      </div>
    </header>
  );
};
