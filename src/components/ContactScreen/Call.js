import * as React from 'react';
import {Button, View, Text, StyleSheet} from "react-native";


export default function Call({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title= "End Call" style = {styles.roundButton}
                    onPress={() => navigation.navigate('TrackOfficer')}>End Call</Button>
        </View>

    );

}

const styles = StyleSheet.create({
    roundButton: {
        marginTop: 20,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#c4c4c4',
    }});