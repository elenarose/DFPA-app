import * as React from "react";
import {Form, Item, Picker, Label, Input} from 'native-base';

export default function DOBForm({ month, setMonth, day, setDay, year, setYear }) {

  return (
    <Form>
      <Item picker>
        <Picker
          mode="dropdown"
          placeholder="Select month"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={month}
          onValueChange={setMonth}
        >
          <Picker.Item label="January" value={1} />
          <Picker.Item label="February" value={2} />
          <Picker.Item label="March" value={3} />
          <Picker.Item label="April" value={4} />
          <Picker.Item label="May" value={5} />
          <Picker.Item label="June" value={6} />
          <Picker.Item label="July" value={7} />
          <Picker.Item label="August" value={8} />
          <Picker.Item label="September" value={9} />
          <Picker.Item label="October" value={10} />
          <Picker.Item label="November" value={11} />
          <Picker.Item label="December" value={12} />
        </Picker>
      </Item>
      <Item floatingLabel>
        <Label>Day:</Label>
        <Input onChangeText={setDay}
               value={day}/>
      </Item>
      <Item floatingLabel>
        <Label>Year:</Label>
        <Input onChangeText={setYear}
               value={year}/>
      </Item>
    </Form>
  );
}