import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Button, View, ImageBackground } from 'react-native';
import * as RootNavigation from './RootNavigation'
export default function Footer(props) {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Home')}
            ><Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Jon Snow')}
            ><Text>Jon Snow</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Arya Stark')}
            ><Text>Arya Stark</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Ned Stark')}
            ><Text>Ned Stark</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Sansa Stark')}
            ><Text>Sansa Stark</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor:"opaque",
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    button: {
        padding: 10
    }
});