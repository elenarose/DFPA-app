import * as React from "react";
import { Content } from 'native-base';
import OptionalTextArea from "./OptionalTextArea";

export default function MedicationInfo({ hasMedications, setHasMedications, medications, setMedications }) {

  return (
    <Content>
      <OptionalTextArea question="Do you take any medications?"
                        prompt="List the medications you take:"
                        hasThing={hasMedications} setHasThing={setHasMedications}
                        thing={medications} setThing={setMedications} />
    </Content>
  );

}