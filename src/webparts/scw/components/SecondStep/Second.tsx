import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from './Second.module.scss';

const Second: FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <p>A bilingual name complies with the Official Languages Act and makes it easier for others to find your Sharepoint community in the GCXchange Catalogue.
        Each name must contain letters and numbers only. It must be more than 5 characters long, to a maximum of 125 characters.
      </p>
      <form>
        <div className={styles.field} >
          <label>English community name</label>
          <p>Must be more than 5 but less than 125 characters long and no special characters permitted.For better discoverability consider using keywords not abbreviations.</p>
          <input type="text" name="englishCommName" />
        </div>
        <div className={styles.field}>
          <label>French community name</label>
          <p>Must be more than 5 but less than 125 characters long and no special characters permitted.For better discoverability consider using keywords not abbreviations.</p>
          <input type="text" name="frenchCommName" />
        </div>
      </form>
    </section>
  )
}
export default Second;