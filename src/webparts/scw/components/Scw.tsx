import * as React from 'react';
import styles from './Scw.module.scss';
import { IScwProps } from './IScwProps';
import { FunctionComponent } from 'react';

const Scw: FunctionComponent<IScwProps> =(props) => {
  return (
    <div className={styles.container}>Hello</div>
  );
}
export default Scw;