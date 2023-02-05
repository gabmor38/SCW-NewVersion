import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from './Four.module.scss';

const Four: FunctionComponent = () => {
  return (
    <section>
      <p>You may need to store protected documents or information in your community library. GCXchange can provide a space for protected information
        up to the level of Protected B. First, let&apos;s find out whether or not you will be storing protected documents in your community.
      </p>
      <div className={styles.cardContainer}>
          <div className={styles.choiceCard}>
            <div className={styles.cardHeading}>
              <input type="radio" value="unclassified" />
              <label>Unclassified community</label>
            </div>
            <div className={styles.cardBody}>
              <p>No I don&apos;t need to store protected information. <strong>All users will be able to find your community, and search for it.</strong></p>
            </div>
          </div>
          <div className={styles.choiceCard}>
            <div className={styles.cardHeading} style={{opacity: '0.5'}}>
              <input type="radio" value="protected" />
              <label>Protected A or B community</label>
            </div>
            <div className={styles.cardBody}>
              <p>Yes I need to store protected information such as:</p>
              <p>consent forms, personal information, contact details for individuals or organizations, financial documentation, or other documents that, if compromised,
                <strong>could cause injury to an individual, organization or government.</strong>
              </p>
            </div>
          </div>
        </div>

    </section>
  )
}
export default Four;