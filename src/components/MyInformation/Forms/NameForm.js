import * as React from "react";
import {Text, View} from "react-native";
import MyTextInput from "../../shared/MyTextInput";

export default function NameForm({styles,
                                   firstName, setFirstName,
                                   middleName, setMiddleName,
                                   lastName, setLastName}) {
  return (
    <View>
      <Text style={styles.title}>Enter your name</Text>
      <Text>First Name:</Text>
      <MyTextInput value={firstName} onChangeText={setFirstName} />
      <Text>Middle Name:</Text>
      <MyTextInput value={middleName} onChangeText={setMiddleName} />
      <Text>Last Name:</Text>
      <MyTextInput value={lastName} onChangeText={setLastName} />
    </View>
  );
}