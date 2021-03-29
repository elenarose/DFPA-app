import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';


export default function CallOrMessage({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title= "Call" style = {styles.roundButton}
                onPress={() => navigation.navigate('Call')}>Call</Button>
            <Button title= "Message" style = {styles.roundButton}
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