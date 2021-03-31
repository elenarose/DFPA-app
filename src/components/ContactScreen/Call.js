import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";


export default function Call({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
            <Text style = {styles.header}>NUPD</Text>
            <Text style = {styles.calling}>Calling...</Text>
            </View>

        <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.roundButton}>
                <Image  source={require('./mute.png')}
                        style = {styles.imageStyle}></Image>
            </TouchableOpacity>
                <Text style={styles.appButtonText}>Mute
                </Text>

            <TouchableOpacity
                style={styles.roundButton}>
                <Image  source={require('./plussignicon.png')}
                        style = {styles.imageStyle}></Image>
            </TouchableOpacity>
                <Text style={styles.appButtonText}>Add Call
                </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.roundButton}>
                <Image
                    source={require('./keypadicon.png')}
                    style = {styles.imageStyle}
                />
            </TouchableOpacity>

                <Text style={styles.appButtonText}>Keypad
                </Text>

            <TouchableOpacity
                style={styles.roundButton}>
                <Image  source={require('./video-camera.png')}
                        style = {styles.imageStyle}></Image>
            </TouchableOpacity>
                <Text style={styles.appButtonText}>Video
                </Text>
            </View>


            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.roundButton}>
                <Image  source={require('./volume.png')}
                        style = {styles.imageStyle}></Image>
            </TouchableOpacity>
                <Text style={styles.appButtonText}>Speaker
                </Text>

            <TouchableOpacity
                style={styles.roundButton}>
                <Image  source={require('./user.png')}
                        style = {styles.imageStyle}></Image>
            </TouchableOpacity>
                <Text style={styles.appButtonText}>Contacts
                </Text>

            </View>

        </View>

            <View style={styles.containerHeader}>
                <TouchableOpacity
                    style={styles.roundButton}
                    onPress={() => navigation.navigate('TrackOfficer')}>
                    <Text style={styles.EndCallButton}>End Call
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    calling: {
       marginBottom: 40
    },

    container: {
        marginHorizontal: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    containerHeader: {
        marginLeft: 100,

        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        alignSelf: 'center',
        marginVertical: 50,
        marginBottom: 0,
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
    },
    EndCallButton: {
        fontSize: 16,
        alignSelf: "center",
        textTransform: "uppercase"

    }});