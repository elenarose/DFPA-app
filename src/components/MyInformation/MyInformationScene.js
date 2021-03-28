import * as React from 'react';
import { StyleSheet } from 'react-native';
import BeginScreen from "./BeginScreen";
import MyInformationForm from "./MyInformationForm";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyInformationScene() {
  return (
    <Stack.Navigator style={styles.header}>
      <Stack.Screen name="My Information" component={BeginScreen} />
      <Stack.Screen name="Form" component={MyInformationForm} />
    </Stack.Navigator>
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
  }
})