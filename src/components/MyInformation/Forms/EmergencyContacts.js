import * as React from "react";
import {Content, View, Text} from 'native-base';
import MyButton from "../../shared/MyButton";
import {StyleSheet, TouchableOpacity} from "react-native";
import EmergencyContactForm from "./Contacts/EmergencyContactForm";

export default function EmergencyContacts(props) {
  const { setShowButtonControls } = props;
  const [addingContact, setAddingContact] = React.useState(false);
  const [editingContact, setEditingContact] = React.useState(false);
  const [savedAContact, setSavedAContact] = React.useState(false);

  function handleEditContactPress() {
    setEditingContact(true);
    setShowButtonControls(false);
  }

  function handleNewContactPress() {
    setAddingContact(true);
    setShowButtonControls(false);
  }

  function onAddComplete() {
    setSavedAContact(true);
    setEditingContact(false);
    setAddingContact(false);
    setShowButtonControls(true);
  }

  function getOutput() {
    if (addingContact) {
      return (<Content>
        <Text>New Emergency Contact</Text>
        <EmergencyContactForm onSave={onAddComplete} />
      </Content>);
    } else if (editingContact) {
      return (<Content>
        <Text>Edit Emergency Contact</Text>
        <EmergencyContactForm onSave={onAddComplete} />
      </Content>);
    } else {
      return (
        <Content>
          {
            savedAContact ?
            <View>
              <Text style={styles.label}>Primary Contact:</Text>
              <View style={styles.box}>
                <Text style={styles.content}>My mom</Text>
                <TouchableOpacity onPress={handleEditContactPress} style={styles.editButton}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            : <></>
          }
          <MyButton
            title={savedAContact < 1 ? "Add primary contact" : "Add additional contact"}
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
      padding: 5
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
      marginLeft: 208,
      textAlign: 'center',
      width: 50
    }
  })