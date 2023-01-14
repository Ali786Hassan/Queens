import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../App/Screens/Home';
import CustomDrawer from '../App/Components/CustomDrawer';
import Search from '../App/Screens/Search';
import Card from '../App/Screens/Card';
import Profile from '../App/Screens/Profile';
import Setting from '../App/Screens/Setting';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

const AppStack =() => {
    return(

        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor:'#186DEE',
            drawerActiveTintColor:'#fff',
            drawerInactiveTintColor:'#333',
            drawerContentContainerStyle:{borderRadius:10},
            drawerLabelStyle:{marginLeft:10,fontSize:15,fontWeight:'bold'}
            }}>
            <Drawer.Screen name='Home' component={Home} options={{
                drawerIcon:({color}) => {
                  <Ionicons name='home' size={22} color={color} style={{marginLeft:10}}/>
                }
            }} />
            <Drawer.Screen name='Search' component={Search} 
            />
            <Drawer.Screen name='Card' component={Card} />
            <Drawer.Screen name='Profile' component={Profile}/>
            <Drawer.Screen name='Setting' component={Setting}/>
        </Drawer.Navigator>
    );
};

export default AppStack;