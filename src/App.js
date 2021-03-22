import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReviewOfficerScene from "./components/ReviewOfficer/ReviewOfficerScene";
import ContactNUPDScene from "./components/ContactScreen/ContactNUPDScene";
import MyInformationScene from "./components/MyInformation/MyInformationScene";


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Review Officer" component={ReviewOfficerScene} />
        <Tab.Screen name="Contact NUPD" component={ContactNUPDScene} />
        <Tab.Screen name="View/Edit My Info" component={MyInformationScene} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;