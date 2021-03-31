import * as React from 'react';
import { Content, Text, View } from 'native-base';
import {StyleSheet} from "react-native";
import MyButton from "../../shared/MyButton";

export default function PersonalInfo({ params }) {
  const {
    firstName, middleName, lastName,
    month, day, year,
    street, apt, city, state, zip
  } = params;

  return (
    <Content padder contentContainerStyle={styles.container}>
      <Text style={styles.label}>First Name:</Text>
      <Text style={styles.content }>{firstName} </Text>
      <View style={styles.line} />

      <Text style={styles.label}>Middle Name:</Text>
      <Text style={styles.content}>{middleName} </Text>
      <View style={styles.line} />

      <Text style={styles.label}>Last Name:</Text>
      <Text style={styles.content}>{lastName} </Text>
      <View style={styles.line} />

      <Text style={styles.label}>Date of Birth (mm/dd/yyyy):</Text>
      <Text style={styles.content}>{[month, day, year].filter((x) => x != null).join('/')} </Text>
      <View style={styles.line} />

      <Text style={styles.label}>Street Address:</Text>
      <Text style={styles.content}>{street} </Text>
      <View style={styles.line} />

      <Text style={styles.label}>Apt, Suite, etc:</Text>
      <Text style={styles.content}>{apt} </Text>
      <View style={styles.line} />

      <Text style={styles.label}>City:</Text>
      <Text style={styles.content}>{city} </Text>
      <View style={styles.line} />

      <Text style={styles.label}>State:</Text>
      <Text style={styles.content}>{state} </Text>
      <View style={styles.line} />

      <Text style={styles.label}>Zip Code:</Text>
      <Text style={styles.content}>{zip} </Text>
      <View style={styles.line} />

      <MyButton title="Edit Personal Info" />
    </Content>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      padding: 20
    },
    label: {
      fontSize: 20,
      marginVertical: 10
    },
    content: {
      fontSize: 20,
      fontWeight: '200'
    },
    line: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: '100%'
    }
  })
