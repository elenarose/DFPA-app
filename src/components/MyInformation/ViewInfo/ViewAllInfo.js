import * as React from 'react';
import {Content, Text} from 'native-base';
import MyButton from "../../shared/MyButton";
import {StyleSheet} from "react-native";
import PersonalInfo from "./PersonalInfo";
import MedicalInfo from "./MedicalInfo";

export default function ViewAllInfo({ route }) {
  const [completed, setCompleted] = React.useState(false);
  const [page, setPage] = React.useState('personal');

  if (!completed) {
    return (
      <Content padder contentContainerStyle={styles.container}>
        <Text style={styles.thankYou}>Thank You.</Text>
        <Text style={styles.prompt}>
          Your information will only be shared with first responders in the event of an emergency.
        </Text>
        <MyButton title="Okay"
                  onPress={() => setCompleted(true)} />
      </Content>
    );
  } else {
    return (
      <Content>
        <Content contentContainerStyle={styles.buttonContainer}>
          <MyButton title="View Personal Info" onPress={() => setPage('personal')} disabled={page === 'personal'} />
          <MyButton title="View Medical Info" onPress={() => setPage('medical')} disabled={page === 'medical'} />
        </Content>
        {
          page === 'personal'
          ? <PersonalInfo params={route.params}/>
          : <MedicalInfo params={route.params}/>
        }
      </Content>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 120
    },
    thankYou: {
      fontSize: 32,
    },
    prompt: {
      marginVertical: 20,
      fontSize: 16,
      width: 300
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
  })