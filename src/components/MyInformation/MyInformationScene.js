import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BeginScreen from "./BeginScreen";
import MyInformationForm from "./MyInformationForm";

export default function MyInformationScene() {
  const [showBeginScreen, setShowBeginScreen] = React.useState(true);

  function handleBeginButtonPress() {
    setShowBeginScreen(false);
  }

  function handleExitButtonPress() {
    setShowBeginScreen(true);
  }

  return (
    <View style={styles.container}>
      <Text  style={styles.header}>
        My Information
      </Text>
      {showBeginScreen ?
       <BeginScreen onBegin={handleBeginButtonPress} style={styles.content}/> :
       <MyInformationForm style={styles.content} onExit={handleExitButtonPress}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  header: {
    alignSelf: 'center',
    marginVertical: 50,
    fontSize: 36,
    fontWeight: 'bold'
  },
  content: {

  }
})