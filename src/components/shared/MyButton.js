import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MyButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
   appButtonContainer: {
     elevation: 8,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: "center",
     backgroundColor: "#c4c4c4",
     borderRadius: 4,
     width: 150,
     height: 50,
     textAlign: "center",
     marginTop: 15,
     marginHorizontal: 6,
     marginBottom: 6,
   },
   appButtonText: {
     fontSize: 15,
     width: 100,
     textAlign: "center"
   }
});