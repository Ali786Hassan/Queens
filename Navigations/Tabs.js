import { StyleSheet, Text, View ,Image} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../App/Screens/Home';
import Search from '../App/Screens/Search';
import Card from '../App/Screens/Card';
import Setting from '../App/Screens/Setting';

const Tab = createBottomTabNavigator();

export default function RootTab(){
    return(
        <Tab.Navigator 
        screenOptions={{
          tabBarShowLabel:false,
          tabBarStyle:{
            position:'absolute',
            bottom:5,
            left:5,
            right:5,
            elevation:0,
           borderRadius:30,
            height:60,
            backgroundColor:"#186DEE",
            justifyContent:'space-evenly',
            ...styles.Shadow
          }
        }}
            >
            <Tab.Screen name='Home' component={Home}  
          options={{
            headerShown:false,
            tabBarIcon:({focused}) =>(
              <View>
                <Image   
                source={require('../App/Assets/Images/ho.png')}
                resizeMode='contain'
                style={{
                  width:23,
                  height:23,
                  tintColor:focused ? '#FFF' : '#4C7FC1',
                  alignSelf:'center'
                  
                }}
                />
                <Text style={{color:'white',fontSize:12,tintColor:focused ? '#186DEE' : '#dddedd'}}>Home</Text>
              </View>
            ),
          }}
          />
        <Tab.Screen name='Search' component={Search} 
          options={{
            headerShown:false,
            tabBarIcon:({focused}) =>(
              <View>
                <Image   
                source={require('../App/Assets/Images/magnifier.png')}
                resizeMode='contain'
                style={{
                  width:23,
                  height:23,
                  tintColor:focused ? '#FFF' : '#4C7FC1',
                  alignSelf:'center'
                }}
                />
                <Text style={{color:'white',fontSize:12,tintColor:focused ? '#186DEE' : '#dddedd'}}>Search</Text>
              </View>
            ),
          }}
          
          />
        <Tab.Screen name='Card' component={Card} 
          options={{
            headerShown:false,
            tabBarIcon:({focused}) =>(
              <View>
                <Image   
                source={require('../App/Assets/Images/car.png')}
                resizeMode='contain'
                style={{
                  width:23,
                  height:23,
                  tintColor:focused ? '#FFF' : '#4C7FC1',
                  alignSelf:'center'
                }}
                />
                <Text style={{color:'white',fontSize:12,tintColor:focused ? '#186DEE' : '#dddedd'}}>Card</Text>
              </View>
            ),
          }}
          
        />
        <Tab.Screen name='Setting' component={Setting}
        options={{
          headerShown:false,
          tabBarIcon:({focused}) =>(
            <View>
              <Image   
              source={require('../App/Assets/Images/setting2.png')}
              resizeMode='contain'
              style={{
                width:23,
                height:23,
                tintColor:focused ? '#FFF' :'#4C7FC1',
                alignSelf:'center'
              }}
              />
              <Text style={{color:'white',fontSize:12}}>Setting</Text>
            </View>
          ),
        }}
        
        />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    Shadow:{
      shadowColor:'#7f5df0',
        shadowOffset:{
          width:0,
          height:10,
        }
    }
  })