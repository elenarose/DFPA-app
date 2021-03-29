import * as React from "react";
import { Content, CheckBox, ListItem, Body, Text, Textarea, Form } from 'native-base';

export default function MedicationInfo({ hasMedications, setHasMedications, medications, setMedications }) {

  function onYesPress() {
    setHasMedications(true)
  }

  function onNoPress() {
    setHasMedications(false)
  }

  function getTextArea() {
    if (hasMedications) {
      return (
        <Form>
          <Text>List the medications you take:</Text>
          <Textarea onChangeText={setMedications}
                    value={medications}/>
        </Form>
      );
    }
  }

  return (
    <Content>
      <Text>Do you take any medications?</Text>
      <ListItem>
        <CheckBox checked={hasMedications} onPress={onYesPress}/>
        <Body>
          <Text>Yes</Text>
        </Body>
      </ListItem>
      <ListItem>
        <CheckBox checked={!hasMedications} onPress={onNoPress} />
        <Body>
          <Text>No</Text>
        </Body>
      </ListItem>
      {getTextArea()}
    </Content>
  );
}