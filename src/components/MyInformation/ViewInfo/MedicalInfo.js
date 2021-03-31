import * as React from 'react';
import { Content, Text, View } from 'native-base';
import {StyleSheet} from "react-native";
import MyButton from "../../shared/MyButton";

export default function MedicalInfo({ params }) {
  const {
    hasAllergies, allergies,
    hasMedications, medications,
    hasMedicalCondition, medicalCondition
  } = params;

  return (
    <Content padder contentContainerStyle={styles.container}>
      <Text style={styles.label}>Allergies: {hasAllergies ? "" : "None" }</Text>
      {
        hasAllergies ?
        <View style={styles.box}>
          <Text style={styles.content}>{allergies}</Text>
        </View> : <></>
      }

      <Text style={styles.label}>Medications: {hasMedications ? "" : "None" }</Text>
      {
        hasMedications ?
        <View style={styles.box}>
          <Text style={styles.content}>{medications}</Text>
        </View> : <></>
      }

      <Text style={styles.label}>Medical Conditions:  {hasMedicalCondition ? "" : "None" }</Text>
      {
        hasMedicalCondition ?
        <View style={styles.box}>
          <Text style={styles.content}>{medicalCondition}</Text>
        </View> : <></>
      }

      <MyButton title="Edit Medical Info" />
    </Content>
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
      fontWeight: '200'
    },
    box: {
      borderColor: 'black',
      borderWidth: 1,
    }
  })
