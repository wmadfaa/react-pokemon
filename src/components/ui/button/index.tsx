import React, { forwardRef } from "react";
import classNames from "classnames";
import { motion, HTMLMotionProps } from "framer-motion";

import styles from "./button.module.scss";

export interface ButtonProps extends HTMLMotionProps<"button"> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={classNames(styles.root, className)}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);
