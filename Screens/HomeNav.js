import 'react-native-gesture-handler';
import  React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function HomeNavbar () {  
  return (
    <View>
        <Text style={Styles.Text}>Home</Text>
    </View>
  );
}

const Styles = StyleSheet.create ({
  Text:{
        
        color: '#000000aa',
        fontSize: 20,
        fontWeight: '500',
    }
})

