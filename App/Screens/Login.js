import React, { useState } from 'react';
import { 
View,StyleSheet,ImageBackground,Text,Dimensions,TouchableOpacity,
SafeAreaView,Image,StatusBar} from 'react-native';
import Colors from '../Assets/Config/colors';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Usericon from 'react-native-vector-icons/Feather';
import Arrowleft from 'react-native-vector-icons/Feather';
// const width = Dimensions.get('window').width ;
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
function Login({navigation}) {

    return (
        
        <SafeAreaView
        style={styles.con}
        >
        <ImageBackground
        
        style={{width,height:height/2}}
        
        source={require('../Assets/Images/Rectangle.png')}>
         <StatusBar backgroundColor="#4C7FC1" />
        <Arrowleft
                    onPress={()=>  navigation.goBack()} 
                    style={{marginTop:10,alignSelf:'center',marginTop:60,marginLeft:-330}}
                    name="arrow-left-circle"
                    color={'white'}
                    size={30}
                />
          <Usericon
                    style={{alignSelf:'center',marginTop:10}}
                    name="user"
                    color={'white'}
                    size={100}
                />
          <View style={styles.container}>
            <Text style={styles.text}>
                Welcome back!
                </Text>
        <Input 
        placeholder="Enter your email address"
        label="Email" iconName="email-outline"
        />
        <Input 
        placeholder="Enter your password"
        label="Password" iconName="lock-outline"
        password
        />
        <Button onPress={() => navigation.navigate('Home')} title="Login"/>
    
        <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
        <Text style={{color:'gray',marginLeft:230,fontWeight:'bold',marginTop:10,fontSize:15,color:Colors.Google1}}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width:40, height:40, marginLeft:130, marginTop:15, elevation:5}}
        source={require('../Assets/Images/google.png')}>
        </Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{width:40,height:40,marginLeft:220,marginTop:-39,elevation:10}}
        source={require('../Assets/Images/facebook.png')}>
        </Image>
        </TouchableOpacity>
        <Text style={{color:'gray',marginLeft:90,fontWeight:'bold',marginTop:20,fontSize:15,color:Colors.lightgray}}>Don't have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{color:'gray',marginLeft:250,fontWeight:'bold',marginTop:-22,fontSize:18,color:Colors.Google1}}>Sign up</Text>
        </TouchableOpacity>
          </View>
        </ImageBackground>
       
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        width,
        height,
        backgroundColor:'#ffffff',
        marginTop:90,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    con:{
        flex:1,
        height,
        width,
        backgroundColor:"#fff",
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:Colors.Google1,
        marginTop:10,
        marginLeft:30,
    },
    text1:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginTop:-5
    },
    input2:{
    borderWidth:2,
    borderColor:"#AAAAAA",
    backgroundColor:'#ffff',
    marginHorizontal:20,
    borderRadius:12,
    marginBottom:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    alignItems:"center",
    paddingLeft:15,
    elevation:3,
    },
    btn:{
        backgroundColor:'#186DEE',
        alignItems:'center',
        justifyContent:'center',
        width:'70%',
        height:55,
        padding:15,
        borderRadius:12,
        marginTop:50,
        marginLeft:30
    },
})
export default Login;