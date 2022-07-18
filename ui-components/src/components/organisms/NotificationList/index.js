import React from "react";
import Notification from "../Notification";
import styles from './style.css';

const NotificationList = ({
  programs,
  onClickDelete,
  ...props
}) => (
  <div {...props}>
    { programs.map((program, idx) => (
      <Notification
      key={ idx }
      className={ styles.item }
      program={ program }
      onClickDelete={ onClickDelete }
    />
    ))}
  </div>
);

export default NotificationList;