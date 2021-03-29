import * as React from "react";
import { Content, CheckBox, ListItem, Body, Text, Textarea, Form } from 'native-base';

export default function MedicalInfo({ hasMedicalCondition, setHasMedicalCondition, medicalCondition, setMedicalCondition }) {

  function onYesPress() {
    setHasMedicalCondition(true)
  }

  function onNoPress() {
    setHasMedicalCondition(false)
  }

  function getTextArea() {
    if (hasMedicalCondition) {
      return (
        <Form>
          <Text>List your medical conditions:</Text>
          <Textarea onChangeText={setMedicalCondition}
                    value={medicalCondition}/>
        </Form>
      );
    }
  }

  return (
    <Content>
      <Text>Do you have any medical conditions?</Text>
      <ListItem>
        <CheckBox checked={hasMedicalCondition} onPress={onYesPress}/>
        <Body>
          <Text>Yes</Text>
        </Body>
      </ListItem>
      <ListItem>
        <CheckBox checked={!hasMedicalCondition} onPress={onNoPress} />
        <Body>
          <Text>No</Text>
        </Body>
      </ListItem>
      {getTextArea()}
    </Content>
  );
}