import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import HomePage from './Home';
import DonatePage from './Donate';
import LearnPage from './Learn';
import AdoptPage from './Adopt';
import SignIn from './Account';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Donate" component={DonatePage} options={{ headerShown: false }} />
        <Stack.Screen name="Learn" component={LearnPage}  options={{ headerShown: false }}/>
        <Stack.Screen name="Adopt" component={AdoptPage}  options={{ headerShown: false }}/>
        <Stack.Screen name="Sign In" component={SignIn} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
  },
});
