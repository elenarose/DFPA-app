import {TouchableOpacity, StyleSheet, Text, View, Image} from "react-native";
import * as React from "react";

export default function TrackOfficer({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {styles.header}>Track Officer</Text>

            <Image
                source={require('./smallerMap.png')}
                style = {styles.imageStyle}
            />
            <Text style = {styles.textFont}>Officer Smith is 5 minutes away.</Text>

            <TouchableOpacity title="Back" style = {styles.roundButton}
                    onPress={() => navigation.navigate('Message')}><Text>Back</Text></TouchableOpacity>


        </View>

    )};



    const styles = StyleSheet.create({
        header: {
            alignSelf: 'center',
            marginVertical: 50,
            fontSize: 36,
            fontWeight: 'bold'
        },
        textFont: {
            alignSelf: 'center',
            marginVertical: 50,
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