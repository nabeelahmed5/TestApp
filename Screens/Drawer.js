import  React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './Home';
import Notification from './Notification';
import Profile from './Profile';
import HomeNavbar from './HomeNav';
import ProfileNavbar from './ProfileNav';
import NotificationNavbar from './NotificationNav';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'

function HomeScreen({navigation}) {
  return (
  <View>
    <View style={styles.NavContainer}>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>  
    <Icon style={styles.NavTxt} name="menu" type='feather' />
    </TouchableOpacity>  
      <HomeNavbar />
    <Icon style={styles.NavTxt} name="user" type='feather' />  
    </View>  
    <View style={styles.HomeContainer}>  
      <Home />
    </View>  
  </View>  
  );
}

function ProfileScreen({ navigation }) {
    return (
    <View syle={{ margin: 0, Padding: 0, }}>
    <View style={styles.NavContainer}>  
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon style={styles.NavTxt} name="arrow-left" type='feather' />
    </TouchableOpacity>  
      <ProfileNavbar />  
      <TouchableOpacity onPress={() => navigation.openDrawer()}>  
    <Icon style={styles.NavTxt} name="menu" type='feather' />  
    </TouchableOpacity>
    </View>   
      <View style={styles.HomeContainer}>  
        <Profile />
      </View>  
    </View>
    );
    }

function NotificationScreen({ navigation }) {
  return (
    <View>
    <View style={styles.NavContainer}> 
    <TouchableOpacity onPress={()=>navigation.goBack()}> 
    <Icon style={styles.NavTxt} name="arrow-left" type='feather' />
    </TouchableOpacity>  
      <NotificationNavbar />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>  
    <Icon style={styles.NavTxt} name="menu" type='feather' />  
    </TouchableOpacity>
    </View>     
    <View style={styles.HomeContainer}>  
      <Notification />
    </View>  
  </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sign In"
        onPress={() => props.navigation.closeDrawer()}>
          Sign In
      </DrawerItem>    
      <DrawerItem
        label="Sign Out"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator 
    drawerStyle={{
      backgroundColor: '#fff',
      borderTopRightRadius: 20,
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name="Profile" component={ProfileScreen}/>
    <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  );
  }

  const styles = StyleSheet.create ({
    NavTxt:{
      justifyContent: 'flex-end',
    },
    NavContainer:
    {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 13,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '100%',
        
    },
    HomeContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        height: '100%',
    },
    text:{
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
    }
})