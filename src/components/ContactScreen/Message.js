import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, ImageBackground, TextInput} from "react-native";



export default function Message({navigation}) {

    return (
        <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


                    <ImageBackground  source={require('./chat.png')}
                            style = {styles.imageStyle}>
                        <Text style = {styles.chatText}>The authorities have been notified! Help is on the way.</Text>
                    </ImageBackground>


                    <ImageBackground source={require('./chat.png')}
                           style = {styles.imageStyle}>
                        <Text style = {styles.chatText}>Please provide details about the emergency if possible.</Text>
                    </ImageBackground>


                    <Text style = {styles.sendLeft}>Enter Details Here:</Text>
                    <TextInput style = {styles.textBox} />

                    <ImageBackground  source={require('./chat.png')}
                            style = {styles.imageStyle}>
                        <Text style = {styles.chatText}>An officer is on the way!</Text>
                    </ImageBackground>


                    <ImageBackground source={require('./chat.png')}
                           style = {styles.imageStyle}>
                        <Text style = {styles.chatText}>Click here to track your officer:</Text>
                    </ImageBackground>

                    <TouchableOpacity title="TrackOfficer" style = {styles.rectangleButton}
                                      onPress={() => navigation.navigate('TrackOfficer')}><Text>Track Officer</Text></TouchableOpacity>

                <TouchableOpacity title="Back" style = {styles.rectangleSendRight}
                                  onPress={() => navigation.navigate('ContactNUPD')}><Text>Back To Home</Text></TouchableOpacity>



                </View>
        </View>







    );

}



const styles = StyleSheet.create({

    sendLeft: {
        marginLeft: 280
    },


    textBox: {
        borderRadius: 10,
        fontSize: 16,
        color: "#000000",
        backgroundColor: "#FFFFFF",
        borderColor: "#c4c4c4",
        borderWidth: 1,
        width: 140,
        height: 50,
        marginLeft: 300,
        marginRight: 10,
        marginBottom: 10
    },
    chatText: {
        marginTop: 20,
        marginRight: 5,
        marginLeft: 5,
        fontSize: 11

    },

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
        marginBottom: 20,
        height: 100,
        width: 100,
        marginRight: 300,
        marginLeft: 40,
        resizeMode: "contain"

    },

    flippedImage: {
        height: 50,
        width: 50,
        marginLeft: 300,
        resizeMode: "contain",

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
    },

    rectangleButton: {
            width: 120,
            height: 35,
            marginRight: 250,
            justifyContent: 'center',
            marginBottom: 30,
            alignItems: 'center',
            backgroundColor: '#c4c4c4',
            borderRadius: 10,
    },
    rectangleSendRight: {
        width: 120,
        height: 35,
        marginRight: 250,
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 50,
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
        borderRadius: 10,
    }
});