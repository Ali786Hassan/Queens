import React from 'react';
import { View,StyleSheet,ImageBackground,Text, TextInput,TouchableOpacity,Image,StatusBar} from 'react-native';
import Colors from '../Assets/Config/colors';
import Mail from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Usericon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Arrowleft from 'react-native-vector-icons/Feather';
function Login({navigation}) {
    return (
        
        <ImageBackground
        style={{width:435,height:250}}
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
                    style={{alignSelf:'center',marginTop:-30}}
                    name="user"
                    color={'white'}
                    size={100}
                />
          <View style={styles.container}>
            <Text style={styles.text}>Welcome back!</Text>
        <Text style={{color:'#AAAAAA',marginLeft:30,fontWeight:'bold',marginBottom:5,marginTop:15}}> Email</Text>
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
            <Text style={{color:'#AAAAAA',marginLeft:30,fontWeight:'bold',marginBottom:5,marginTop:-5}}> Password</Text>
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
            <TouchableOpacity onPress={() => navigation.navigate('Home')}
            style={styles.btn}>
           <Text style={styles.text1}>
             Sign in
           </Text>
        </TouchableOpacity>
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
       
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'55%',
        backgroundColor:'#ffffff',
        marginTop:60,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
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
    input:{
        backgroundColor:'#f9f9f9',
        width:'90%',
        height:60,
        marginLeft:20,
        marginTop:10,
        borderRadius:20,
        borderColor:'gray',
        borderWidth:2 
    },
    input2:{
        borderWidth:2,
    borderColor:"#AAAAAA",
    backgroundColor:'#f9f9f9',
    marginHorizontal:20,
    borderRadius:12,
    marginBottom:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    alignItems:"center",
    paddingLeft:15,
    },
    btn:{
        backgroundColor:'#186DEE',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        height:55,
        padding:15,
        borderRadius:12,
        marginTop:50,
        marginLeft:20
    },
})
export default Login;