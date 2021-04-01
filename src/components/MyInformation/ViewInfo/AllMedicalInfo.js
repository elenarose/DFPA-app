import * as React from 'react';
import { Content, Text, View } from 'native-base';
import {StyleSheet} from "react-native";
import MyButton from "../../shared/MyButton";
import AllergyInfo from "../Forms/AllergyInfo";
import MedicationInfo from "../Forms/MedicationInfo";
import MedicalInfo from "../Forms/MedicalInfo";

export default function AllMedicalInfo({ params }) {
  const {
    hasAllergies, allergies,
    hasMedications, medications,
    hasMedicalCondition, medicalCondition
  } = params;

  const [editing, setEditing] = React.useState(false);

  function nothing() {

  }

  if (editing) {
    return (
      <Content>
        <AllergyInfo hasAllergies={hasAllergies} setHasAllergies={nothing}
                     allergies={allergies} setAllergies={nothing} />
        <MedicationInfo hasMedications={hasMedications} setHasMedications={nothing}
                        medications={medications} setMedications={nothing}/>
        <MedicalInfo hasMedicalCondition={hasMedicalCondition}
                     setHasMedicalCondition={nothing}
                     medicalCondition={medicalCondition}
                     setMedicalCondition={nothing}/>
        <MyButton title="Finish Editing" onPress={() => setEditing(false)} />
      </Content>);
  } else {
    return (
      <Content padder contentContainerStyle={styles.container}>
        <Text style={styles.label}>Allergies: {hasAllergies ? "" : "None"}</Text>
        {
          hasAllergies ?
          <View style={styles.box}>
            <Text style={styles.content}>{allergies}</Text>
          </View> : <></>
        }

        <Text style={styles.label}>Medications: {hasMedications ? "" : "None"}</Text>
        {
          hasMedications ?
          <View style={styles.box}>
            <Text style={styles.content}>{medications}</Text>
          </View> : <></>
        }

        <Text style={styles.label}>Medical Conditions: {hasMedicalCondition ? "" : "None"}</Text>
        {
          hasMedicalCondition ?
          <View style={styles.box}>
            <Text style={styles.content}>{medicalCondition}</Text>
          </View> : <></>
        }

        <MyButton title="Edit Medical Info" onPress={() => setEditing(true)}/>
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
    }
  })
