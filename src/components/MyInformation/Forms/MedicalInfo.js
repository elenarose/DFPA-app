import * as React from "react";
import { Content } from 'native-base';
import OptionalTextArea from "./OptionalTextArea";

export default function MedicalInfo({ hasMedicalCondition, setHasMedicalCondition, medicalCondition, setMedicalCondition }) {

  return (
    <Content>
      <OptionalTextArea question="Do you have any medical conditions?"
                        prompt="List your medical conditions:"
                        hasThing={hasMedicalCondition} setHasThing={setHasMedicalCondition}
                        thing={medicalCondition} setThing={setMedicalCondition} />
    </Content>
  );
}