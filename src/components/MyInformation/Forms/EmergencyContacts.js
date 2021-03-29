import * as React from "react";
import { Content } from 'native-base';
import MyButton from "../../shared/MyButton";
import AddEmergencyContact from "./Contacts/AddEmergencyContact";
import {Text} from "react-native-web";

export default function EmergencyContacts({ emergencyContacts, setEmergencyContacts }) {
  const [addingContact, setAddingContact] = React.useState(false);

  function handleNewContactPress() {
    setAddingContact(true);
  }

  function onAddComplete(newContact) {
    setEmergencyContacts([newContact]);
    setAddingContact(false);
  }

  function renderContacts() {
    return emergencyContacts.forEach((contact) => {
      return <Text>{contact.firstName + " " + contact.lastName}</Text>;
    });
  }

  function getOutput() {
    if (addingContact) {
      return (<AddEmergencyContact emergencyContacts={emergencyContacts} onComplete={onAddComplete} />);
    } else {
      return (
        <Content>
          {renderContacts()}
          <MyButton
            title={emergencyContacts.length < 1 ? "Add primary contact" : "Add additional contact"}
            onPress={handleNewContactPress}/>
        </Content>
      );
    }
  }

  return (
    <Content>{getOutput()}</Content>
  );
}