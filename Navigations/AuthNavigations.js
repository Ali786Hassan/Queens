import react from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../App/Screens/Login';
import Signup from '../App/Screens/Signup';
import Onboard from '../App/Screens/Onborad';
import Reset from '../App/Screens/Reset';
import DetailsScreen from '../App/Screens/DetailsScreen';
import RootTab from '../Navigations/Tabs';
import AppStack from '../Navigations/AppStack';
import Setting from '../App/Screens/Setting';



const Auth = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
             name='Onboard' component={Onboard} options={{headerShown:false}}/>
            
            <Auth.Screen
             name='Login' component={Login} options={{headerShown:false}}/>

             
            <Auth.Screen
             name='Signup' component={Signup} options={{headerShown:false}}/>

            <Auth.Screen
             name='Reset' component={Reset} options={{headerShown:false}}/>

             <Auth.Screen
             name='DetailsScreen' component={DetailsScreen} options={{headerShown:false}}/>
             
             <Auth.Screen
             name='Setting' component={Setting} options={{headerShown:false}}/>

            <Auth.Screen
             name='Home' component={RootTab} options={{headerShown:false}}/>
        </Auth.Navigator>
         
    );
};

