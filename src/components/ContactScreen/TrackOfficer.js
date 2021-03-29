import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

export default function TrackOfficer({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Track Officer</Text>
            <Button title="Back" style={styles.roundButton}
                    onPress={() => navigation.navigate('Message')}>Message</Button>
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