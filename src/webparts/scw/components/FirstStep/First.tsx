import * as React from "react";
import { FunctionComponent } from "react";
import { Stack } from "office-ui-fabric-react";
import { IScwProps } from "../IScwProps";

const First: FunctionComponent<IScwProps> = (props) => {

  
  return (
    <Stack>
      <main> 
        <form>
          <div>
            <label>
              <input type="radio" value="libraryTemplate" />
              Library Template
            </label>
          </div>
          <div>
              <label>
                <input type="radio" value="collaborationTemplate"/>
               Collaboration Template
             </label>
            </div>
        </form>
      </main>
    </Stack>
  );
};
export default First;
