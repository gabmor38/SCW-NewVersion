import * as React from "react";
import { FunctionComponent } from "react";
import { Stack } from "office-ui-fabric-react";
import { IScwProps } from "../IScwProps";
import styles from "../FirstStep/First.module.scss"

const First: FunctionComponent<IScwProps> = (props) => {

  
  return (
    <Stack>
      <section>
        <p>Every community gets a site with a variety of features. This is where users can discover your site and ask to join as members.
          Let us help you get started with a template for your site.
        </p>
        <p>
          You can choose between two options for your community template.
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.choiceCard}>
            <div className={styles.cardHeading}>
              <input type="radio" value="library" />
              <label>Library Template</label>
            </div>
            <div className={styles.cardBody}>
              <p>This template is for communities that operate as repositories of information. This template includes a homepage, an about page and a document library</p>
              <ul>
                <li>Homepage</li>
                <li>About us</li>
                <li>Document Library</li>
              </ul>
            </div>
          </div>
          <div className={styles.choiceCard}>
            <div className={styles.cardHeading}>
              <input type="radio" value="collaboration" />
              <label>Collaboration Template</label>
            </div>
            <div className={styles.cardBody}>
              <p>This template is for communities that want to encourage collaboration, like a network or community of practice. This template includes a homepage, an about page, an events page, a library and more.</p>
              <ul>
                <li>Homepage</li>
                <li>About us</li>
                <li>Document Library</li>
                <li>Events</li>
                <li>Members</li>
              </ul>
            </div>
          </div>
        </div>
          
      </section> 
    </Stack>
  );
};
export default First;
