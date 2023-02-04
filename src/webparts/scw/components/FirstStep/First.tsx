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
          <div className={styles.choiceCard}>
            <label>
              <input type="radio" value="libraryTemplate" />
              Library Template
            </label>
          </div>
          <div className={styles.choiceCard}>
              <label>
                <input type="radio" value="collaborationTemplate"/>
               Collaboration Template
             </label>
            </div>
      </section> 
    </Stack>
  );
};
export default First;
