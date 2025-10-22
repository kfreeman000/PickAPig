import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

function HomePage () {

  const navigation = useNavigation();  
  const background = require('./assets/homePage.mp4');
  

  return (
  <View style={styles.container}>

    <Video
        source={background} 
        style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
        shouldPlay
        isLooping
        isMuted
        resizeMode="cover"
    />
    <View style={buttonStyles.container}>
      <TouchableOpacity 
        style={buttonStyles.buttons}
        onPress={ () => navigation.navigate('Sign In')}>     
        <Text style={buttonStyles.text}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={buttonStyles.buttons}
        onPress={ () => navigation.navigate('Learn')}> 
        <Text style={buttonStyles.text}>Learn</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={buttonStyles.buttons}
        onPress={ () => navigation.navigate('Adopt')}>     
        <Text style={buttonStyles.text}>Adopt</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={buttonStyles.buttons}
        onPress={ () => navigation.navigate('Donate')}> 
        <Text style={buttonStyles.text}>Donate</Text>
      </TouchableOpacity>
    </View>  
  </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
  buttons: {
    alignItems: 'center',
    margin: 30,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'American Typewriter'
  }
})

