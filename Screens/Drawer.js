import  React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './Home';
import Notification from './Notification';
import Profile from './Profile';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}> 
        <Home />
        <Button title="Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}> 
          <Profile />
          <Button title="Drawer" onPress={() => navigation.openDrawer()} />
      </View>
    );
    }

function NotificationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Notification />
      <Button title="Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <View style={{ flex: 1, backgroundColor: '#6200ee', height: '10%', width: '100%', alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '500', }}>Welcome</Text>
      </View>  
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  );
  }
