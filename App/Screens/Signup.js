import React from 'react';
import { View,StyleSheet,ImageBackground,Text,Dimensions, TextInput,TouchableOpacity,SafeAreaView,Image,StatusBar} from 'react-native';
import colors from '../Assets/Config/colors';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Usericon from 'react-native-vector-icons/Feather';
import Arrowleft from 'react-native-vector-icons/Feather';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
function Signup({navigation}) {
    return (
        <SafeAreaView style={styles.con}>
        <ImageBackground
        style={{width,height:height/2,}}
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
                    style={{alignSelf:'center',marginTop:10,marginLeft:10}}
                    name="user-plus"
                    color={'white'}
                    size={100}
                />
          <View style={styles.container}>
            <Text style={styles.text}>Let's Get Started</Text>
            <Input 
        placeholder="Enter your email address"
        label="Email" iconName="email-outline"
        />
        <Input 
        placeholder="Enter your password"
        label="Password" iconName="lock-outline"
        password
        />
        <Button onPress={() => navigation.navigate('Home')} title="Sign up"/>
        {/* <Text style={{color:'#AAAAAA',marginLeft:30,fontWeight:'bold',marginBottom:5,marginTop:5}}>Phone no</Text>
        <View style={styles.input2}>
                <Entypo
                    name="phone"
                    color={'#AAAAAA'}
                    size={22}
                />
                <TextInput
                style={{
                    width:"100%",
                    color:"black"
                }}
                keyboardType="number-pad"
                textContentType="telephoneNumber"
                />
            </View>
        <Text style={{color:'#AAAAAA',marginLeft:30,fontWeight:'bold',marginBottom:5,marginTop:-10}}>Email</Text>
        <View style={styles.input2}>
                <Mail
                    name="mail"
                    color={'#AAAAAA'}
                    size={22}
                />
                <TextInput
                style={{
                    width:"100%",
                    color:"black"
                }}
                keyboardType="email-address"
                autoCapitalize='none'
                autoCorrect={false}
                />
            </View>
            <Text style={{color:'#AAAAAA',marginLeft:30,fontWeight:'bold',marginBottom:5,marginTop:-10}}> Password</Text>
            <View style={styles.input2}>
                <Fontisto
                    name="locked"
                    color={'#AAAAAA'}
                    size={20}
                />
                
                <TextInput
                style={{
                    width:"100%",
                    color:"black"
                }}
                    secureTextEntry={true}
                    textContentType="password"
                />
                
            </View>
            <Entypo
                    style={{marginLeft:330,marginTop:-55}}
                    name="eye-with-line"
                    color={'#AAAAAA'}
                    size={20}
                />
            <TouchableOpacity
            style={styles.btn}>
           <Text style={styles.text1}>
             Sign up
           </Text>
        </TouchableOpacity> */}
        
        <TouchableOpacity>
        <Image style={{ width:40, height:40, marginLeft:130, marginTop:20, elevation:5}}
        source={require('../Assets/Images/google.png')}>
        </Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{width:40,height:40,marginLeft:220,marginTop:-39,elevation:10}}
        source={require('../Assets/Images/facebook.png')}>
        </Image>
        </TouchableOpacity>
        <Text style={{color:'gray',marginLeft:80,fontWeight:'bold',marginTop:20,fontSize:15,color:colors.lightgray}}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color:'gray',marginLeft:270,fontWeight:'bold',marginTop:-22,fontSize:18,color:colors.Google1}}>Sign in</Text>
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
        backgroundColor:'white',
        marginTop:90,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    con:{
        flex:1,
        width,
        height,
        backgroundColor:"#fff",
    },
    google:{
         width: 60,
         height:60,
         marginLeft:50,
         backgroundColor:'#fff'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:colors.blue,
        marginTop:10,
        marginLeft:30,
    },
    text1:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginTop:-5
    },
   
})
export default Signup;