import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReviewOfficerScene from "./components/ReviewOfficer/ReviewOfficerScene";
import ContactNUPDScene from "./components/ContactScreen/ContactNUPDScene";
import MyInformationScene from "./components/MyInformation/MyInformationScene";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Contact NUPD'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Review Officer') {
              iconName = focused
                         ? 'pencil'
                         : 'pencil-outline';
            } else if (route.name === 'Contact NUPD') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else {
              iconName = focused
                         ? 'information-circle'
                         : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: { fontSize: 12, fontWeight: 'bold'}
        }}
      >
        <Tab.Screen name="Review Officer" component={ReviewOfficerScene} />
        <Tab.Screen name="Contact NUPD" component={ContactNUPDScene} />
        <Tab.Screen name="View/Edit My Info" component={MyInformationScene} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;