import {createStackNavigator} from "@react-navigation/stack";
import ROLandingPage from "./ROLandingPage";
import React from "react";
import ROCameraPage from "./ROCameraPage";
import ROOfficerReviewPage from "./ROOfficerReviewPage";

const Stack = createStackNavigator();

export default function ReviewOfficerScene() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Officer Accountability" component={ROLandingPage}/>
            <Stack.Screen name="Scan Officer I.D." component={ROCameraPage}/>
            <Stack.Screen name="Officer Review" component={ROOfficerReviewPage}/>
        </Stack.Navigator>
    );
}