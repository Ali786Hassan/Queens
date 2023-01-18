import React from 'react';
import { View,StyleSheet,ImageBackground,Text, TextInput,TouchableOpacity,Dimensions,SafeAreaView,StatusBar} from 'react-native';
import colors from '../Assets/Config/colors';
import Mail from 'react-native-vector-icons/Fontisto';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Usericon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Arrowleft from 'react-native-vector-icons/Feather';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
function Reset({navigation}) {
    return (
        <SafeAreaView style={styles.con}>
        <ImageBackground
        style={{width:435,height:330}}
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
                    style={{alignSelf:'center',marginTop:10,marginRight:10,marginBottom:-5}}
                    name="lock-reset"
                    color={'white'}
                    size={120}
                />
          <View style={styles.container}>
            <Text style={styles.text}>Create new password</Text>
           
        <Text style={{color:'#AAAAAA',marginLeft:30,fontWeight:'bold',marginBottom:5,marginTop:15}}> Email</Text>
        <View style={styles.input2}>
                <Mail
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
            <Text style={{color:'#AAAAAA',marginLeft:30,fontWeight:'bold',marginBottom:5,marginTop:30}}> Password</Text>
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
             Create
           </Text>
        </TouchableOpacity>
          </View>
        </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'40%',
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
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:colors.Google1,
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
    backgroundColor:'#fff',
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
        width:'90%',
        height:55,
        padding:15,
        borderRadius:12,
        marginTop:60,
        marginLeft:20
    },
});
export default Reset;