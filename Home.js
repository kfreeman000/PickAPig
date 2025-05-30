import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomePage () {

  const navigation = useNavigation();  
  const backgroundImage = require('./assets/pigHome.jpeg');

  return (
  <View style={styles.container}>

    <ImageBackground 
    source={backgroundImage} 
    style={styles.background}
    imageStyle={styles.image}>

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

    </ImageBackground>
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
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

const buttonStyles = StyleSheet.create({
  buttons: {
    backgroundColor: 'pink',
    alignItems: 'center',
    margin: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'American Typewriter'
  }
})

