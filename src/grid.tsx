import React from "react";
import classNames from "classnames";

export const Container = (props) => (
  <div {...props} className={classNames("container", props.className)}>
    {props.children}
  </div>
);

export const Row = (props) => (
  <div {...props} className={classNames("row", props.className)}>
    {props.children}
  </div>
);

export const Column = ({ size, ...props }) => (
  <div {...props} className={classNames(`col col--${size}`, props.className)}>
    {props.children}
  </div>
);
