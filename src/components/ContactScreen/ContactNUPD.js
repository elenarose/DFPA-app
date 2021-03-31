import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function ContactNUPD({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style = {styles.roundBiggerButton}>
            <TouchableOpacity
                style={styles.roundButton}
                onPress={() => navigation.navigate('CallOrMessage')}>
                <Text style={styles.appButtonText}>Press and Hold to
                </Text>
                <Text style={styles.header}>Contact NUPD
                </Text>
            </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        textTransform: "uppercase"
    },
    roundBiggerButton:{
        width: 360,
        height: 360,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 200,
        backgroundColor: '#bababa',
    },
    roundButton: {
        width: 320,
        height: 320,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 160,
        backgroundColor: '#c4c4c4',
    },
    appButtonText: {
        fontSize: 18,
        alignSelf: "center",

    }
});




