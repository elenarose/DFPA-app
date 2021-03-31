import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default function CallOrMessage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>

            <Image  source={require('./phone-call.png')}
                    style = {styles.imageStyle}></Image>

            <TouchableOpacity
                style={styles.roundButton}
                onPress={() => navigation.navigate('Call')}>
                <Text style={styles.appButtonText}>Call
                </Text>
            </TouchableOpacity>

            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
               <Image  source={require('./chat.png')}
                style = {styles.imageStyle}></Image>

            <TouchableOpacity
                style={styles.roundButton}
                onPress={() => navigation.navigate('Message')}>
                <Text style={styles.appButtonText}>Message
                </Text>
            </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 75,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    roundButton: {
    marginTop: 20,
        width: 180,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 140,
        backgroundColor: '#c4c4c4',
},
    appButtonText: {
        fontSize: 24,
        alignSelf: "center",
        fontWeight: 'bold',
        textTransform: "uppercase"

    },
    imageStyle: {
        flex: 1,
        height: 100,
        width: 100,
        marginRight: 40,
        resizeMode: "contain"

    }
});