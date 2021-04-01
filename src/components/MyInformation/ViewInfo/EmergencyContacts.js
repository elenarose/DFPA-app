import * as React from 'react';
import { Content, Text, View } from 'native-base';
import {StyleSheet, TouchableOpacity} from "react-native";
import MyButton from "../../shared/MyButton";
import EmergencyContactForm from "../Forms/Contacts/EmergencyContactForm";

export default function EmergencyContacts() {
  const [addingContact, setAddingContact] = React.useState(false);
  const [editingContact, setEditingContact] = React.useState(false);

  if (addingContact) {
    return (<Content>
      <Text>New Emergency Contact</Text>
      <EmergencyContactForm onSave={() => setAddingContact(false)} />
    </Content>);
  } else if (editingContact) {
    return (<Content>
      <Text>Edit Emergency Contact</Text>
      <EmergencyContactForm onSave={() => setEditingContact(false)} />
    </Content>);
  } else {
    return (
      <Content padder contentContainerStyle={styles.container}>
        <Content>
          <View>
            <Text style={styles.label}>Primary Contact:</Text>
            <View style={styles.box}>
              <Text style={styles.content}>My mom</Text>
              <TouchableOpacity onPress={() => setEditingContact(true)} style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.label}>Secondary Contact:</Text>
            <View style={styles.box}>
              <Text style={styles.content}>My sister</Text>
              <TouchableOpacity onPress={() => setEditingContact(true)} style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <MyButton
            title="Add additional contact"
            onPress={() => setAddingContact(true)}/>
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
      fontWeight: '200'
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
      marginLeft: 200,
      textAlign: 'center',
      width: 50
    }
  })