import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function ContactNUPD({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Button title= "CONTACT NUPD"
                          style = {styles.roundButton}
                            onPress={() => navigation.navigate('CallOrMessage')} />
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
    },
    appButtonText: {
        fontSize: 18,
        alignSelf: "center",
        textTransform: "uppercase"
    }
});




