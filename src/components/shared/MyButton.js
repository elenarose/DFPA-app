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
     backgroundColor: "#c4c4c4",
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12
   },
   appButtonText: {
     fontSize: 18,
     alignSelf: "center",
     textTransform: "uppercase"
   }
});