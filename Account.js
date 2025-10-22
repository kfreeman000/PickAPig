import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomePage from './Home';


function CreateAcc () {

  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [why, setWhy] = useState('');
  //const theIm = require('./assets/backBut.jpeg');

  const makeAcc = () => {
    //send to database perhaps
    // then make logic for if person already has an account
    Alert.alert("account created! woooo")
    navigation.navigate("Home")
  }

  return (
  <View style={styles.container}>

    <Text>create a username</Text>
    <TextInput style={buttonStyles.input}
        value={userName} // Connects input value to state
        onChangeText={setUserName} // Updates state when text changes
    />

    <Text>create a password (shhhhh)</Text>
    <TextInput style={buttonStyles.input}
        value={password} // Connects input value to state
        onChangeText={setPassword} // Updates state when text changes
    />

    <Text>enter email</Text>
    <TextInput style={buttonStyles.input}
        value={email} // Connects input value to state
        onChangeText={setEmail} // Updates state when text changes
    />

    <Text>why are you on PickAPig?</Text>
    <TextInput style={buttonStyles.input}
        value={why} 
        onChangeText={setWhy} 
        placeholder='tell us what brought you to this app!'
    />

    <TouchableOpacity style={buttonStyles.buttons}
        onPress={makeAcc}>
        <Text style={buttonStyles.text}>
          Submit
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.back}
        onPress={ () => navigation.navigate('Home')}>
        <Image>

        </Image>
    </TouchableOpacity>

  </View>
)}


export default CreateAcc;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
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
})

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
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 80,
    backgroundColor: 'white',
    fontSize: 16,
  },
})
