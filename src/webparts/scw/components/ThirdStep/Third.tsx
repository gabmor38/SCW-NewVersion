import * as React from 'react';
import { FunctionComponent } from 'react';
import styles from './Third.module.scss';

const Third: FunctionComponent = () => {
  return (
    <section className={styles.container}>
    <p>A community description helps users to find your community with our search function. This 33 character description will be visible to users when they use our 
      all communities page and when they search for it in the search bar.
    </p>
    <form>
      <div className={styles.field} >
        <label>Short English description</label>
        <p>Maximum 33 characters in English.</p>
        <input type="text" name="englishDescription" />
      </div>
      <div className={styles.field}>
        <label>Short French description</label>
        <p>Maximum 33 characters in French.</p>
        <input type="text" name="frenchDescription" />
      </div>
      <div className={styles.field}>
        <label>Business reason</label>
        <p>In maximum 500 characters explain the purpose of this communityfor our support teamto determine whether or not it can be approved.
          This will not show up on your site.
        </p>
        <input type="text" name="businessReason" />
      </div>
    </form>
  </section>
  )
}
export default Third ;