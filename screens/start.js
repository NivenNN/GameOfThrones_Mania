import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

function Start(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/map.jpg")}
        >
            <View style={styles.list}>
            <Text>WELCOME TO GAME OF THRONES MANIA</Text>
            <Text>The home of powerful quotes by powerful characters</Text>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    list:{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        margin: 250,
        backgroundColor: "white",
        textDecorationLine: "black"
       }
})

export default Start;