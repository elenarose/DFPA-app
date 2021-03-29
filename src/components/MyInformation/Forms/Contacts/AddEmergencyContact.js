import * as React from "react";
import { Content, Text } from 'native-base';
import EmergencyContactForm from "./EmergencyContactForm";

export default function AddEmergencyContact({ onComplete }) {
  const [newContact, setNewContact] = React.useState({firstName: "", lastName: "", phone: "", relationship: ""});

  function saveContact() {
    onComplete(newContact);
  }

  return <Content>
    <Text>New Emergency Contact</Text>
    <EmergencyContactForm onSave={saveContact} contact={newContact} setContact={setNewContact} />
  </Content>;
}