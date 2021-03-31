import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default function CallOrMessage({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <TouchableOpacity
                style={styles.roundButton}
                onPress={() => navigation.navigate('Call')}>
                <Text style={styles.appButtonText}>Call
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.roundButton}
                onPress={() => navigation.navigate('Message')}>
                <Text style={styles.appButtonText}>Message
                </Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    roundButton: {
    marginTop: 20,
        width: 180,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 140,
        backgroundColor: '#c4c4c4',
}});