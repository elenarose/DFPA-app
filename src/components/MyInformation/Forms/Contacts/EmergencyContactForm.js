import * as React from "react";
import { Form, Item, Input, Label } from 'native-base';
import MyButton from "../../../shared/MyButton";

export default function EmergencyContactForm({ onSave }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [relationship, setRelationship] = React.useState("");

  function onPress() {
    if (onSave) onSave({firstName, lastName, phone, relationship});
  }

  return (
    <Form>
      <Item floatingLabel>
        <Label>Contact's First Name:</Label>
        <Input onChangeText={setFirstName}
               value={firstName}/>
      </Item>
      <Item floatingLabel>
        <Label>Contact's Last Name:</Label>
        <Input onChangeText={setLastName}
               value={lastName}/>
      </Item>
      <Item floatingLabel>
        <Label>Contact's Phone Number:</Label>
        <Input onChangeText={setPhone}
               value={phone}/>
      </Item>
      <Item floatingLabel>
        <Label>Contact's Relationship to You:</Label>
        <Input onChangeText={setRelationship}
               value={relationship}/>
      </Item>
      <MyButton title="Save" onPress={onPress} />
    </Form>
  );
}