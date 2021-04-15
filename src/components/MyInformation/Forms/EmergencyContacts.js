import * as React from "react";
import {Content, View, Text} from 'native-base';
import MyButton from "../../shared/MyButton";
import {StyleSheet, TouchableOpacity, Alert} from "react-native";
import EmergencyContactForm from "./Contacts/EmergencyContactForm";
import EditEmergencyContact from "./Contacts/EditEmergencyContact";

export default function EmergencyContacts(props) {
  const { setShowButtonControls, emergencyContacts, setEmergencyContacts } = props;
  const [addingContact, setAddingContact] = React.useState(false);
  const [editingContact, setEditingContact] = React.useState(false);
  const [editContact, setEditContact] = React.useState(null);

  function handleEditContactPress(contactPosition) {
    setEditContact(contactPosition);
    setEditingContact(true);
    setShowButtonControls(false);
  }

  function deleteContact(contactPosition) {
    setEmergencyContacts(emergencyContacts.slice(0,contactPosition).concat(emergencyContacts.slice(contactPosition + 1)));
  }

  function handleDeleteContactPress(contactPosition) {
    Alert.alert(
      'Delete Emergency Contact?',
      'Are you sure you want to delete ' + emergencyContacts[contactPosition].firstName + "?",
      [
        {text: 'No, Don\'t Delete', onPress: () => {}, style: 'cancel'},
        {text: 'Yes, Delete', onPress: () => deleteContact(contactPosition)},
      ]
    );
  }

  function handleNewContactPress() {
    setAddingContact(true);
    setShowButtonControls(false);
  }

  function onAddComplete(newContact) {
    setEmergencyContacts(emergencyContacts.concat(newContact));
    setAddingContact(false);
    setShowButtonControls(true);
  }

  function onSaveComplete(editedContact) {
    let allContacts = emergencyContacts;
    allContacts.splice(editContact, 1, editedContact);
    setEmergencyContacts(allContacts);
    setEditingContact(false);
    setShowButtonControls(true);
  }

  function getOutput() {
    if (addingContact) {
      return <EmergencyContactForm onSave={onAddComplete} />
    } else if (editingContact) {
      return <EditEmergencyContact onSave={onSaveComplete} contact={emergencyContacts[editContact]} />;
    } else {
      return (
        <Content>
          {
            emergencyContacts.length > 0 ?
            emergencyContacts.map((contact, i) =>
                                        <View key={i}>
                                          <Text style={styles.label}>{i === 0 ? 'Primary Contact:' : i === 1 ? 'Secondary Contacts:' : ''}</Text>
                                          <View style={styles.box}>
                                            <Text style={styles.content}>{contact.firstName}</Text>
                                            <TouchableOpacity onPress={() => handleEditContactPress(i)}
                                                              style={styles.editButton}>
                                              <Text style={styles.editButtonText}>Edit</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handleDeleteContactPress(i)}
                                                              style={styles.deleteButton}>
                                              <Text style={styles.deleteButtonText}>Delete</Text>
                                            </TouchableOpacity>
                                          </View>
                                        </View>)
          : <></>
          }
          <MyButton
            title={emergencyContacts.length === 0 ? "Add primary contact" : "Add additional contact"}
            onPress={handleNewContactPress}/>
        </Content>
      );
    }
  }

  return (
    <Content>{getOutput()}</Content>
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
      fontWeight: '200',
      padding: 5,
      width: 225
    },
    box: {
      borderColor: 'black',
      borderWidth: 1,
      flexDirection: 'row'
    },
    editButton: {
      alignSelf: 'center',
    },
    editButtonText: {
      backgroundColor: '#c4c4c4',
      marginRight: 10,
      textAlign: 'center',
      width: 50
    },
    deleteButton: {
      alignSelf: 'center',
    },
    deleteButtonText: {
      backgroundColor: '#c4c4c4',
      textAlign: 'center',
      width: 60
    }
  })