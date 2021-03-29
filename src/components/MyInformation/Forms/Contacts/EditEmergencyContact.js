import * as React from "react";
import { Content, Text } from 'native-base';
import EmergencyContactForm from "./EmergencyContactForm";

export default function EditEmergencyContact({ contact, setContact }) {

  return <Content>
    <Text>Edit Emergency Contact</Text>
    <EmergencyContactForm contact={contact} setContact={setContact} />
  </Content>;
}
