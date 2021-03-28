import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyButton from "../shared/MyButton";

export default function BeginScreen({ navigation }) {
  return (
    <View>
      <Text  style={styles.prompt}>
        Provide information about yourself that will be helpful to first responders.
      </Text>
      <MyButton title="Begin"
                onPress={() => navigation.navigate('Form')} />
      <Text style={styles.note}>
        Your information will be kept private and never sold.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  prompt: {
     marginVertical: 20,
     fontSize: 24
  },
  note: {
    textAlign: 'center',
    marginVertical: 40,
    fontSize: 16
  }
})