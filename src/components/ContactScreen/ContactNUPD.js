import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function ContactNUPD({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.roundButton}
                onPress={() => navigation.navigate('CallOrMessage')}>
                <Text style={styles.appButtonText}>Contact NUPD
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    roundButton: {
        marginTop: 20,
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
        textTransform: "uppercase"
    }
});




