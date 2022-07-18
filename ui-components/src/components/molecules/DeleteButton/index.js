import React from 'react';
import styles from './style.css';
import { TrashCanIcon } from '../../atoms/Icon/';
import Balloon from '../../atoms/Balloon/index';


const DeleteButton = ({ className, onClick, ...props}) => (
  <span className={ [styles.root, className].join(' ')} { ...props }>
    <TrashCanIcon onClick={ onClick } />
    <Balloon>削除する</Balloon>
  </span>
);

export default DeleteButton;