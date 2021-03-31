import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content } from 'native-base';
import MyButton from "../shared/MyButton";
import NameForm from "./Forms/NameForm";
import DOBForm from "./Forms/DOBForm";
import AddressForm from "./Forms/AddressForm";
import AllergyInfo from "./Forms/AllergyInfo";
import MedicationInfo from "./Forms/MedicationInfo";
import MedicalInfo from "./Forms/MedicalInfo";
import EmergencyContacts from "./Forms/EmergencyContacts";

export default function MyInformationForm({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [month, setMonth] = React.useState(null);
  const [day, setDay] = React.useState(null);
  const [year, setYear] = React.useState(null);
  const [street, setStreet] = React.useState(null);
  const [apt, setApt] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [state, setState] = React.useState(null);
  const [zip, setZip] = React.useState(null);
  const [hasAllergies, setHasAllergies] = React.useState(false);
  const [allergies, setAllergies] = React.useState("");
  const [hasMedications, setHasMedications] = React.useState(false);
  const [medications, setMedications] = React.useState("");
  const [hasMedicalCondition, setHasMedicalCondition] = React.useState(false);
  const [medicalCondition, setMedicalCondition] = React.useState("");
  const [emergencyContacts, setEmergencyContacts] = React.useState([]);

  const [currentForm, setCurrentForm] = React.useState(0);
  const [showBackButton, setShowBackButton] = React.useState(false);
  const [showButtonControls, setShowButtonControls] = React.useState(true);

  let forms = new Map()
  const lastForm = 6
  forms.set(0,
            {form: (<NameForm styles={styles}
                                firstName={firstName} setFirstName={setFirstName}
                                middleName={middleName} setMiddleName={setMiddleName}
                                lastName={lastName} setLastName={setLastName} />),
              title: "Enter your name"
            })
  forms.set(1,
            {form: (<DOBForm styles={styles} month={month} setMonth={setMonth}
                                day={day} setDay={setDay} year={year} setYear={setYear} />),
              title: "Enter your date of birth"})
  forms.set(2,
            {form: (<AddressForm street={street} setStreet={setStreet} apt={apt} setApt={setApt}
                                 city={city} setCity={setCity} state={state} setState={setState}
                                 zip={zip} setZip={setZip} />),
              title: "Enter your home address"})
  forms.set(3,
            {form: (<AllergyInfo hasAllergies={hasAllergies} setHasAllergies={setHasAllergies}
                                 allergies={allergies} setAllergies={setAllergies} />),
              title: "Enter your allergy information"})
  forms.set(4,
            {form: (<MedicationInfo hasMedications={hasMedications} setHasMedications={setHasMedications}
                                    medications={medications} setMedications={setMedications}/>),
              title: "Enter your medication information"})
  forms.set(5,
            {form: (<MedicalInfo hasMedicalCondition={hasMedicalCondition}
                                 setHasMedicalCondition={setHasMedicalCondition}
                                 medicalCondition={medicalCondition}
                                 setMedicalCondition={setMedicalCondition}/>),
              title: "Enter your medical condition information"})
  forms.set(6,
            {form: (<EmergencyContacts emergencyContacts={emergencyContacts}
                                       setEmergencyContacts={setEmergencyContacts}
                                       setShowButtonControls={setShowButtonControls}/>),
              title: "Enter your emergency contacts"})

  function handleContinueButtonPress() {
    if (currentForm === lastForm) {
      navigation.navigate('My Information',
                          {
                            completedForm: true,
                            firstName, middleName, lastName,
                            month, day, year,
                            street, apt, city, state, zip,
                            hasAllergies, allergies,
                            hasMedications, medications,
                            hasMedicalCondition, medicalCondition
                          });
    } else {
      setCurrentForm(currentForm + 1);
      setShowBackButton(true);
    }
  }

  function handleBackButtonPress() {
    if (currentForm === 1) {
      setShowBackButton(false);
    }
    setCurrentForm(currentForm - 1);
  }

  function getBackButton() {
    if(showBackButton)
      return <MyButton title="Return to previous form" style={styles.button} onPress={handleBackButtonPress} />;
  }

  function getButtonControls() {
    if (showButtonControls) {
      return <Content contentContainerStyle={styles.container}>
                {getBackButton()}
                <MyButton title={currentForm === lastForm ? "Complete" : "Save and Continue"}
                          style={styles.button} onPress={handleContinueButtonPress} />
              </Content>;
    }
  }

  return (
    <Content padder>
      <Text style={styles.title}>{forms.get(currentForm).title}</Text>
      {forms.get(currentForm).form}
      {getButtonControls()}
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  title: {
    textAlign: 'left',
    marginVertical: 20,
    fontSize: 24
  },
  button: {
    alignSelf: 'flex-end'
  }
});
