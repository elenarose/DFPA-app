import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MyButton from "../shared/MyButton";
import NameForm from "./Forms/NameForm";

export default function MyInformationForm({onExit}) {
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const [currentForm, setCurrentForm] = React.useState(0);
  const [showBackButton, setShowBackButton] = React.useState(false);

  function getForm() {
    switch (currentForm) {
      case 0 :
        return (<NameForm styles={styles}
                          firstName={firstName} setFirstName={setFirstName}
                          middleName={middleName} setMiddleName={setMiddleName}
                          lastName={lastName} setLastName={setLastName} />);
      default:
        return (<Text>This Form not done</Text>);
    }
  }

  function handleContinueButtonPress() {
    setCurrentForm(currentForm + 1);
    setShowBackButton(true);
  }

  function handleBackButtonPress() {
    if (currentForm === 1) {
      setShowBackButton(false);
    }
    setCurrentForm(currentForm - 1);
  }

  function getBackButton() {
    if(showBackButton)
      return <MyButton title="Return to previous form" style={styles.backButton} onPress={handleBackButtonPress} />;
  }

  return (
    <View style={styles.container}>
      {getForm()}
      {getBackButton()}
      <MyButton title="Save and Continue" style={styles.saveButton} onPress={handleContinueButtonPress} />
      <MyButton title="Exit My Information" style={styles.exitButton} onPress={onExit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    textAlign: 'left',
    marginVertical: 20,
    fontSize: 24
  },
  saveButton: {

  },
  exitButton: {

  },
  backButton: {

  }
});
