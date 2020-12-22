import  React from 'react';
import { View, Text, StyleSheet } from 'react-native';
        
export default function Notification () {
    return (
        <View style={Styles.Container}>
            <Text style={Styles.Text}>Notifications</Text>
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