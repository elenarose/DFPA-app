import * as React from 'react';
import { Content, Text, View } from 'native-base';
import {StyleSheet} from "react-native";
import MyButton from "../../shared/MyButton";
import NameForm from "../Forms/NameForm";
import DOBForm from "../Forms/DOBForm";
import AddressForm from "../Forms/AddressForm";

export default function PersonalInfo({ params }) {

  const [editing, setEditing] = React.useState(false);
  const [firstName, setFirstName] = React.useState(params.firstName);
  const [middleName, setMiddleName] = React.useState(params.middleName);
  const [lastName, setLastName] = React.useState(params.lastName);
  const [month, setMonth] = React.useState(params.month);
  const [day, setDay] = React.useState(params.day);
  const [year, setYear] = React.useState(params.year);
  const [street, setStreet] = React.useState(params.street);
  const [apt, setApt] = React.useState(params.apt);
  const [city, setCity] = React.useState(params.city);
  const [state, setState] = React.useState(params.state);
  const [zip, setZip] = React.useState(params.zip);

  function isZipCode(str) {
    let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regexp.test(str);
  }


  function doneEditing() {
    if (isZipCode(zip)) {
      setEditing(false)
    }
  }

  if (editing) {
    return (
      <Content padder contentContainerStyle={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <NameForm styles={styles}
                  firstName={firstName} setFirstName={setFirstName}
                  middleName={middleName} setMiddleName={setMiddleName}
                  lastName={lastName} setLastName={setLastName} />
        <Text style={styles.label}>Date of Birth:</Text>
        <DOBForm styles={styles} month={month} setMonth={setMonth}
                 day={day} setDay={setDay} year={year} setYear={setYear} />
        <Text style={styles.label}>Address:</Text>
        <AddressForm street={street} setStreet={setStreet} apt={apt} setApt={setApt}
                     city={city} setCity={setCity} state={state} setState={setState}
                     zip={zip} setZip={setZip} />
        <MyButton title="Finish Editing" onPress={doneEditing} />
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
