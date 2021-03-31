import * as React from "react";
import { Content } from 'native-base';
import OptionalTextArea from "./OptionalTextArea";

export default function AllergyInfo({ hasAllergies, setHasAllergies, allergies, setAllergies }) {

  return (
    <Content>
      <OptionalTextArea question="Do you have any allergies?"
                        prompt="List your allergies:"
                        hasThing={hasAllergies} setHasThing={setHasAllergies}
                        thing={allergies} setThing={setAllergies} />
    </Content>
  );
}