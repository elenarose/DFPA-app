import * as React from "react";
import { Form, Item, Input, Label } from 'native-base';

export default function AddressForm({ street, setStreet, apt, setApt, city, setCity, state, setState, zip, setZip }) {
  return (
    <Form>
      <Item floatingLabel>
        <Label>Street Address:</Label>
        <Input onChangeText={setStreet}
               value={street}/>
      </Item>
      <Item floatingLabel>
        <Label>Apartment, Suite, etc.:</Label>
        <Input onChangeText={setApt}
               value={apt}/>
      </Item>
      <Item floatingLabel>
        <Label>City:</Label>
        <Input onChangeText={setCity}
               value={city}/>
      </Item>
      <Item floatingLabel>
        <Label>State:</Label>
        <Input onChangeText={setState}
               value={state}/>
      </Item>
      <Item floatingLabel>
        <Label>Zip Code:</Label>
        <Input onChangeText={setZip}
               value={zip}/>
      </Item>
    </Form>
  );
}