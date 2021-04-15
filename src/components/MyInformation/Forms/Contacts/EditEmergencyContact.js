import * as React from "react";
import {Content, Form, Input, Item, Label, Text} from 'native-base';
import EmergencyContactForm from "./EmergencyContactForm";
import MyButton from "../../../shared/MyButton";

export default function EditEmergencyContact({ onSave, contact }) {
  const [firstName, setFirstName] = React.useState(contact.firstName);
  const [lastName, setLastName] = React.useState(contact.lastName);
  const [phone, setPhone] = React.useState(contact.phone);
  const [relationship, setRelationship] = React.useState(contact.relationship);

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
