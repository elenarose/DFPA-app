import * as React from "react";
import { Content, CheckBox, ListItem, Body, Text, Textarea, Form } from 'native-base';
import {StyleSheet} from "react-native";

export default function OptionalTextArea({ hasThing, setHasThing, thing, setThing, question, prompt }) {

  function onYesPress() {
    setHasThing(true)
  }

  function onNoPress() {
    setHasThing(false)
  }

  function getTextArea() {
    if (hasThing) {
      return (
        <Form>
          <Text style={styles.text}>{prompt}</Text>
          <Textarea onChangeText={setThing}
                    value={thing}
                    bordered
                    style={styles.textArea}/>
        </Form>
      );
    }
  }

  return (
    <Content>
      <Text style={styles.text}>{question}</Text>
      <ListItem>
        <CheckBox checked={hasThing} onPress={onYesPress}/>
        <Body>
          <Text>Yes</Text>
        </Body>
      </ListItem>
      <ListItem>
        <CheckBox checked={!hasThing} onPress={onNoPress} />
        <Body>
          <Text>No</Text>
        </Body>
      </ListItem>
      {getTextArea()}
    </Content>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
    marginVertical: 15
  },
  textArea: {
    width: '92%',
    height: 100,
    alignSelf: 'center'
  }
});