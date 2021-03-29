import * as React from "react";
import { Content, CheckBox, ListItem, Body, Text, Textarea, Form } from 'native-base';

export default function AllergyInfo({ hasAllergies, setHasAllergies, allergies, setAllergies }) {

  function onYesPress() {
    setHasAllergies(true)
  }

  function onNoPress() {
    setHasAllergies(false)
  }

  function getTextArea() {
    if (hasAllergies) {
      return (
        <Form>
          <Text>List your allergies:</Text>
          <Textarea onChangeText={setAllergies}
                    value={allergies}
                    bordered
          />
        </Form>
      );
    }
  }

  return (
    <Content>
      <Text>Do you have any allergies?</Text>
      <ListItem>
        <CheckBox checked={hasAllergies} onPress={onYesPress}/>
        <Body>
          <Text>Yes</Text>
        </Body>
      </ListItem>
      <ListItem>
        <CheckBox checked={!hasAllergies} onPress={onNoPress} />
        <Body>
          <Text>No</Text>
        </Body>
      </ListItem>
      {getTextArea()}
    </Content>
  );
}