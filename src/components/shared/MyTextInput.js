import * as React from "react";
import { TextInput, StyleSheet } from 'react-native';

export default function MyTextInput({value, onChangeText}) {
  return (
    <TextInput style={styles.textInput} value={value} onChangeText={onChangeText}/>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    fontSize: 14,
    color: "#000000",
    backgroundColor: "#FFFFFF",
    borderColor: "#c4c4c4",
    borderWidth: 1,
  }
})
