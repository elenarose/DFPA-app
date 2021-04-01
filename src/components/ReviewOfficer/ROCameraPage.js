// import React from "react";
// import {Text, View} from 'react-native';
// import React, {PureComponent} from 'react';
// import {RNCamera} from 'react-native-camera';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {Button} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from 'expo-camera';
// import {Icon} from "react-native-elements/dist/icons/Icon";

export default function ROCameraPage() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
                <Icon name='ios-camera' size={75} color={'grey'} style={{alignSelf: 'center', marginBottom: 20}}
                      onLongPress={() => alert('ID Scanned')}
                />
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginTop: 75,
        margin: 25,
    },
    button: {
        flex: 0.1,
        alignSelf: 'center',
        // alignItems: 'center',
        // width: '25%',
        height: '100%',
        marginBottom: 50,
        color: 'white',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    icon: {
        // height: 20,
        // width: 20,
        color: 'black',
        alignSelf: 'center',
        // iconSize: 20,
    }
});
