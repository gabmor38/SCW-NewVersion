import * as React from 'react';
import styles from './Scw.module.scss';
import { IScwProps } from './IScwProps';
import { FunctionComponent } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';



const Scw: FunctionComponent<IScwProps> =(props) => {
  return (
    <>
      <div className={styles.container}>Hello</div>
      <ProgressBar/>
    </>
    
  );

}
export default Scw;