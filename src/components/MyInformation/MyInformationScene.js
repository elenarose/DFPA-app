import * as React from 'react';
import { Text, View, Button, StyleSheet, Alert } from 'react-native';

export default function MyInformationScene() {
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>
        My Information
      </Text>
      <Text  style={styles.prompt}>
        Provide information about yourself that will be helpful to first responders.
      </Text>
      <Button title="Begin"
              onPress={() => Alert.alert('Simple Button pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 36
  },
  prompt: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 24
  }
})