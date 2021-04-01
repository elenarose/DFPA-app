import * as React from 'react';
import BeginScreen from "./ViewInfo/BeginScreen";
import ViewAllInfo from "./ViewInfo/ViewAllInfo";

export default function MyInformationHome({ route, navigation }) {
  const { completedForm } = route.params;

  if (!completedForm) {
    return <BeginScreen navigation={navigation}/>;
  } else {
    return <ViewAllInfo route={route} />
  }
}