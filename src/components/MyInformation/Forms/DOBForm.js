import * as React from "react";
import { DatePicker, Content } from 'native-base';

export default function DOBForm({styles, date, setDate}) {

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <DatePicker
      defaultDate={new Date()}
      minimumDate={new Date(1900, 1, 1)}
      maximumDate={new Date()}
      locale={"en"}
      timeZoneOffsetInMinutes={undefined}
      modalTransparent={false}
      animationType={"fade"}
      androidMode={"default"}
      placeHolderText="Select date"
      textStyle={{ color: "green" }}
      placeHolderTextStyle={{ color: "#d3d3d3" }}
      onDateChange={onChange}
      value={ date }
      disabled={false}
    />
  );
}