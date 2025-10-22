import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Learn () {

   const navigation = useNavigation();  
   //const backgroundImage = require('./assets/fourPigs.jpeg');

   return (
    <View style={styles.container}>
      <Text style={styles.header}>Learn</Text>
    </View>
  );
}

export default Learn;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },

  header: {
    textAlign: "center",
    padding: 100,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'American Typewriter',

  },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 200,
    height: 100,
    
  },
});