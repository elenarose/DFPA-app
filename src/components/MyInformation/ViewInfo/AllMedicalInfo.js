import * as React from 'react';
import { Content, Text, View } from 'native-base';
import {StyleSheet} from "react-native";
import MyButton from "../../shared/MyButton";
import AllergyInfo from "../Forms/AllergyInfo";
import MedicationInfo from "../Forms/MedicationInfo";
import MedicalInfo from "../Forms/MedicalInfo";

export default function AllMedicalInfo({ params }) {
  const [hasAllergies, setHasAllergies] = React.useState(params.hasAllergies);
  const [allergies, setAllergies] = React.useState(params.allergies);
  const [hasMedications, setHasMedications] = React.useState(params.hasMedications);
  const [medications, setMedications] = React.useState(params.medications);
  const [hasMedicalCondition, setHasMedicalCondition] = React.useState(params.hasMedicalCondition);
  const [medicalCondition, setMedicalCondition] = React.useState(params.medicalCondition);
  const [editing, setEditing] = React.useState(false);

  if (editing) {
    return (
      <Content>
        <AllergyInfo hasAllergies={hasAllergies} setHasAllergies={setHasAllergies}
                     allergies={allergies} setAllergies={setAllergies} />
        <MedicationInfo hasMedications={hasMedications} setHasMedications={setHasMedications}
                        medications={medications} setMedications={setMedications}/>
        <MedicalInfo hasMedicalCondition={hasMedicalCondition}
                     setHasMedicalCondition={setHasMedicalCondition}
                     medicalCondition={medicalCondition}
                     setMedicalCondition={setMedicalCondition}/>
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
