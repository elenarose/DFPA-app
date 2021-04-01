import * as React from 'react';
import { Content, Text, View } from 'native-base';
import {StyleSheet} from "react-native";
import MyButton from "../../shared/MyButton";
import NameForm from "../Forms/NameForm";
import DOBForm from "../Forms/DOBForm";
import AddressForm from "../Forms/AddressForm";

export default function PersonalInfo({ params }) {
  const {
    firstName, middleName, lastName,
    month, day, year,
    street, apt, city, state, zip
  } = params;

  const [editing, setEditing] = React.useState(false);

  function nothing() {

  }

  if (editing) {
    return (
      <Content padder contentContainerStyle={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <NameForm styles={styles}
                  firstName={firstName} setFirstName={nothing}
                  middleName={middleName} setMiddleName={nothing}
                  lastName={lastName} setLastName={nothing} />
        <Text style={styles.label}>Date of Birth:</Text>
        <DOBForm styles={styles} month={month} setMonth={nothing}
                 day={day} setDay={nothing} year={year} setYear={nothing} />
        <Text style={styles.label}>Address:</Text>
        <AddressForm street={street} setStreet={nothing} apt={apt} setApt={nothing}
                     city={city} setCity={nothing} state={state} setState={nothing}
                     zip={zip} setZip={nothing} />
        <MyButton title="Finish Editing" onPress={() => setEditing(false)} />
      </Content>
    );
  } else {
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

          <MyButton title="Edit Personal Info" onPress={() => setEditing(true)} />
        </Content>
      );
    }
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
