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

  let forms = new Map()
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
                                       setEmergencyContacts={setEmergencyContacts} />),
              title: "Enter your emergency contacts"})

  function getForm() {
    switch (currentForm) {
      case 0 :
        return (<NameForm styles={styles}
                          firstName={firstName} setFirstName={setFirstName}
                          middleName={middleName} setMiddleName={setMiddleName}
                          lastName={lastName} setLastName={setLastName} />);
      case 1:
        return (<DOBForm styles={styles} month={month} setMonth={setMonth}
                         day={day} setDay={setDay} year={year} setYear={setYear} />);
      case 2:
        return (<AddressForm street={street} setStreet={setStreet} apt={apt} setApt={setApt}
                             city={city} setCity={setCity} state={state} setState={setState}
                             zip={zip} setZip={setZip} />);
      case 3:
        return (<AllergyInfo hasAllergies={hasAllergies} setHasAllergies={setHasAllergies}
                             allergies={allergies} setAllergies={setAllergies} />);
      case 4:
        return (<MedicationInfo hasMedications={hasMedications} setHasMedications={setHasMedications}
                                medications={medications} setMedications={setMedications}/>);
      case 5:
        return (<MedicalInfo hasMedicalCondition={hasMedicalCondition}
                             setHasMedicalCondition={setHasMedicalCondition}
                             medicalCondition={medicalCondition}
                             setMedicalCondition={setMedicalCondition}/>);
      case 6:
        return (<EmergencyContacts emergencyContacts={emergencyContacts}
                                   setEmergencyContacts={setEmergencyContacts} />);
      default:
        return (<Text>This Form not done</Text>);
    }
  }

  function getText() {
    switch (currentForm) {
      case 0 :
        return "Enter your name";
      case 1:
        return "Enter your date of birth";
      case 2:
        return "Enter your home address";
      case 3:
        return "Enter your allergy information";
      case 4:
        return "Enter your medication information";
      case 5:
        return "Enter your medical condition information";
      case 6:
        return "Enter your emergency contacts";
      default:
        return "This Form not done";
    }
  }

  function handleContinueButtonPress() {
    setCurrentForm(currentForm + 1);
    setShowBackButton(true);
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

  return (
    <Content padder>
      <Text style={styles.title}>{forms.get(currentForm).title}</Text>
      {forms.get(currentForm).form}
      <Content contentContainerStyle={styles.container}>
        {getBackButton()}
        <MyButton title="Save and Continue" style={styles.button} onPress={handleContinueButtonPress} />
      </Content>
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
