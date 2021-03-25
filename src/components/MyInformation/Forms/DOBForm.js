import * as React from "react";
import { Text, View, Platform} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DOBForm({styles, date, setDate}) {

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View>
      <Text style={styles.title}>Enter your date of birth</Text>
      <Text>Date of birth:</Text>
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={onChange}
      />
    </View>
  );
}