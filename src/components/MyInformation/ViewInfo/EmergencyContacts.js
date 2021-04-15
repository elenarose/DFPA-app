import * as React from 'react';
import { Content, Text, View } from 'native-base';
import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import MyButton from "../../shared/MyButton";
import EmergencyContactForm from "../Forms/Contacts/EmergencyContactForm";
import EditEmergencyContact from "../Forms/Contacts/EditEmergencyContact";

export default function EmergencyContacts({params}) {
  const {
    emergencyContacts
  } = params;
  const [contacts, setContacts] = React.useState(emergencyContacts);
  const [addingContact, setAddingContact] = React.useState(false);
  const [editingContact, setEditingContact] = React.useState(false);
  const [editContact, setEditContact] = React.useState(null);

  function handleEditContactPress(contactPosition) {
    setEditContact(contactPosition);
    setEditingContact(true);
  }

  function deleteContact(contactPosition) {
    setContacts(contacts.slice(0,contactPosition).concat(contacts.slice(contactPosition + 1)));
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
  }

  function onAddComplete(newContact) {
    setContacts(contacts.concat(newContact));
    setAddingContact(false);
  }

  function onSaveComplete(editedContact) {
    let allContacts = contacts;
    allContacts.splice(editContact, 1, editedContact);
    setContacts(allContacts);
    setEditingContact(false);
  }

  if (addingContact) {
    return <EmergencyContactForm onSave={onAddComplete} />;
  } else if (editingContact) {
    return <EditEmergencyContact onSave={onSaveComplete} contact={contacts[editContact]}/>;
  } else {
    return (
      <Content padder contentContainerStyle={styles.container}>
        <Content>
          {
            contacts.length > 0 ?
            contacts.map((contact, i) =>
                           <View key={i}>
                             <Text style={styles.label}>{i === 0 ? 'Primary Contact:' : i === 1
                                                                                        ? 'Secondary Contacts:'
                                                                                        : ''}</Text>
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
            title="Add additional contact"
            onPress={handleNewContactPress}/>
        </Content>
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
      fontWeight: '200',
      padding: 5,
      width: 205
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