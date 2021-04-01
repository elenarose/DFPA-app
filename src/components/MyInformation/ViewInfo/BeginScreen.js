import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Content } from 'native-base';
import MyButton from '../../shared/MyButton';

export default function BeginScreen({ navigation }) {
  return (
    <Content padder contentContainerStyle={styles.container}>
      <Text  style={styles.prompt}>
        Provide information about yourself that will be helpful to first responders.
      </Text>
      <MyButton title="Begin"
                onPress={() => navigation.navigate('Form')} />
      <Text style={styles.note}>
        Your information will be kept private and never sold.
      </Text>
    </Content>
  );
}

const styles = StyleSheet.create({
   container: {
     justifyContent: 'center',
     alignItems: 'center',
     paddingTop: 120
   },
   prompt: {
     marginVertical: 20,
     fontSize: 24,
     textAlign: "center",
     width: 300
   },
   note: {
     textAlign: 'center',
     marginVertical: 40,
     fontSize: 16,
     width: 250
   }
})