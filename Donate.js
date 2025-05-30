import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Donate() {
   return (
    <View style={styles.container}>
      <Text>Donate</Text>
    </View>
  );
}

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