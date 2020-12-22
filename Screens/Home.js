import 'react-native-gesture-handler';
import  React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Home () {  
  return (
    <View style={Styles.Container}>
        <Text style={Styles.Text}>Categories</Text>
        
    </View>
  );
}


const Styles = StyleSheet.create ({
    Container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%',
    },
    Text:{
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
    }
})

