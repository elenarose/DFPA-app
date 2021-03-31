import * as React from "react";
import { Form, Item, Input, Label } from 'native-base';

export default function NameForm({firstName, setFirstName, middleName, setMiddleName, lastName, setLastName}) {
  return (
    <Form>
      <Item floatingLabel>
        <Label>First Name:</Label>
        <Input onChangeText={setFirstName}
               value={firstName}/>
      </Item>
      <Item floatingLabel>
        <Label>Middle Name:</Label>
        <Input onChangeText={setMiddleName}
               value={middleName}/>
      </Item>
      <Item floatingLabel>
        <Label>Last Name:</Label>
        <Input onChangeText={setLastName}
               value={lastName}/>
      </Item>
    </Form>
  );
}