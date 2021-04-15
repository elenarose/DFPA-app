import * as React from "react";
import {Form, Icon, Input, Item, Label, Text} from 'native-base';
import MyButton from "../../../shared/MyButton";
import {StyleSheet} from "react-native";

export default function EditEmergencyContact({ onSave, contact }) {
  const [phoneError, setPhoneError] = React.useState(false);
  const [firstName, setFirstName] = React.useState(contact.firstName);
  const [lastName, setLastName] = React.useState(contact.lastName);
  const [phone, setPhone] = React.useState(contact.phone);
  const [relationship, setRelationship] = React.useState(contact.relationship);

  function isPhoneNumber(str) {
    let regexp = /^[0-9]{10}$/;
    return regexp.test(str);
  }

  function validAndUpdatePhone(s) {
    if (isPhoneNumber(s)) {
      setPhoneError(false)
    } else {
      setPhoneError(true)
    }
    setPhone(s)
  }

  function onPress() {
    if (onSave && !phoneError) onSave({firstName, lastName, phone, relationship});
  }

  return (
    <Form>
      <Text style={styles.title}>Edit emergency contact</Text>
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
      <Item floatingLabel error={phoneError}>
        <Label>Contact's Phone Number:</Label>
        <Input onChangeText={(s) => validAndUpdatePhone(s)}
               value={phone}/>
        {phoneError ? <Icon name='close-circle' /> : <></>}
      </Item>
      <Item floatingLabel>
        <Label>Contact's Relationship to You:</Label>
        <Input onChangeText={setRelationship}
               value={relationship} />
      </Item>
      <MyButton title="Save" onPress={onPress}/>
    </Form>
  );
}

const styles = StyleSheet.create(
  {
    title: {
      fontSize: 20,
      paddingHorizontal: 15,
      paddingTop: 15
    }
  })