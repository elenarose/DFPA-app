import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import ContactNUPD from "./ContactNUPD";
import CallOrMessage from "./CallOrMessage"
import Message from "./Message"
import Call from "./Call"
import TrackOfficer from "./TrackOfficer"

export default function ContactNUPDScene() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ContactNUPD" component={ContactNUPD} />
            <Stack.Screen name="CallOrMessage" component={CallOrMessage} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="Call" component={Call} />
        </Stack.Navigator>
    );
}


