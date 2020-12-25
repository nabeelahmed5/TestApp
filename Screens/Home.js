import { ScrollView } from 'react-native-gesture-handler';
import  React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Football from './Football';
import Cricket from './Cricket';
import Hockey from './Hockey';

export default function Home ({navigation}){  
  return (
    <ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Football')}>
        <Text style={styles.txt}>Football</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txt}>Cricket</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.txt}>Hockey</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles= StyleSheet.create ({
  button: {
    backgroundColor: 'tomato',
    padding: 75,
    margin: 30,
    borderRadius: 10,    
  },
  txt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  }
})