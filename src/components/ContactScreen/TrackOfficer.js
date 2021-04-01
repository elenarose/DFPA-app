import {TouchableOpacity, StyleSheet, Text, View, Image} from "react-native";
import * as React from "react";

export default function TrackOfficer({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {styles.header}>Track Your Officer:</Text>

            <Image
                source={require('./smallerMap.png')}
                style = {styles.imageStyle}
            />
            <Text style = {styles.textFont}>Officer Smith is 5 minutes away.</Text>

            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>

            <TouchableOpacity title="Message" style = {styles.messageButton}
                    onPress={() => navigation.navigate('Message')}><Text>Message NUPD</Text></TouchableOpacity>

            <TouchableOpacity title="Call" style = {styles.messageButton}
                              onPress={() => navigation.navigate('Call')}><Text>Call NUPD</Text></TouchableOpacity>
            </View>


        </View>

    )};



    const styles = StyleSheet.create({
        header: {
            alignSelf: 'center',
            marginTop: 0,
            fontSize: 36,
            fontWeight: 'bold'
        },
        textFont: {
            alignSelf: 'center',
            marginBottom: 75,
            fontSize: 24,
            fontWeight: 'bold'
        },
        container: {
            marginHorizontal: 50,
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        },
        imageStyle: {
            resizeMode: "contain",
            height: 430,
            width: 430
        },
        messageButton: {
            width: 150,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#c4c4c4',
            borderRadius: 10,
            marginRight: 20,
            marginLeft: 20
        }});