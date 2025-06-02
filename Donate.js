import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Donate() {

  const navigation = useNavigation();  
   return (
    <View style={styles.container}>
      <Text>Donate</Text>
    </View>
  );
}

export default Donate;

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