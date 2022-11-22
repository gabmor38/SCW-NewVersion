import * as React from 'react';
import styles from './Scw.module.scss';
import { IScwProps } from './IScwProps';
import { FunctionComponent } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import First from './FirstStep/First';
import Second from './SecondStep/Second';
import Third from './ThirdStep/Third';
import Four from './FourStep/Four';
import Last from './LastStep/Last';



const Scw: FunctionComponent<IScwProps> =(props) => {
  return (
    <>
      <div className={styles.container}>Hello</div>
      <ProgressBar/>
      <First/>
      <Second/>
      <Third/>
      <Four/>
      <Last/>
    </>
    
  );

}
export default Scw;