import * as React from 'react';
import { FunctionComponent } from "react";
import { IScwProps } from '../IScwProps';
import styles from './ProgressBar.module.scss';

const ProgressBar: FunctionComponent<IScwProps> = () => {
  return (
    <>
    <div className={styles.progress}>
      <div className={styles.progressBar}/>
      <ul className={styles.progressNum}>
        <li className={styles.step}>1</li>
        <li className={styles.step}>2</li>
        <li className={styles.step}>3</li>
        <li className={styles.step}>4</li>
      </ul>
    </div>
    </>
    
  );
}
export default ProgressBar;