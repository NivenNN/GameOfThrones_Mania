import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View,Button, Icon,Animatable } from 'react-native';

import * as MailComposer from 'expo-mail-composer';

class Contact extends React.Component {
  render() {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/map.jpg")}
    >

          <Button title=' Share Random Quote' buttonStyle={{ backgroundColor: '#7cc'}}
            icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
            onPress={this.sendMail} />
            </ImageBackground>
    );
  }
  sendMail() {
    MailComposer.composeAsync({
      recipients: ['<email_address>'],
      subject: 'From GOT_Mania',
      body: 'Check out this quote: https://game-of-thrones-quotes.herokuapp.com/v1/random'
    });
  }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
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
export default Contact;