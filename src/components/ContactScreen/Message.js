import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";
//
// const responses = [
//     {
//         response: 'The authorities have been notified of your emergency and help is on the way.'
//     },
//     {
//         response: 'Please provide additional details if possible'
//     },
//     {
//         response: 'An officer is on the way!'
//     },
//     {
//         response: 'Click here to track your officer'
//     }
//
//     ]
export default function Message() {
    return (
        <View style={styles.container}>

            {/*<View style={styles.containerHeader}>*/}
            {/*    <Text style = {styles.header}>Message NUPD</Text>*/}
            {/*</View>*/}

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image  source={require('./chat.png')}
                            style = {styles.imageStyle}></Image>
                </TouchableOpacity>

                </View>

            </View>


        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    containerHeader: {
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        alignSelf: 'center',
        marginVertical: 50,
        fontSize: 36,
        fontWeight: 'bold'
    },
    imageStyle: {
        flex: 1,
        height: 50,
        width: 50,
        resizeMode: "contain"

    },
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