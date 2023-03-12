import React from 'react';
import { View,StyleSheet,ImageBackground,Text,Alert,Dimensions,SafeAreaView,StatusBar} from 'react-native';
import colors from '../Assets/Config/colors';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Usericon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrowleft from 'react-native-vector-icons/Feather';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
function Reset({navigation}) {
    return (
        <SafeAreaView style={styles.con}>
        <ImageBackground
        style={{width,height:height/3}}
        source={require('../Assets/Images/Rectangle.png')}>
        <StatusBar backgroundColor="#4C7FC1" />
        <View style={{marginTop:30,marginBottom:-20,marginLeft:25}}>
        <Arrowleft
                    onPress={()=>  navigation.goBack()}
                    name="arrow-left-circle"
                    color={'white'}
                    size={30}
                />
        </View>
        <View style={{alignSelf:'center',marginTop:10}}>
          <Usericon
                    
                    name="lock-reset"
                    color={'white'}
                    size={120}
                />
        </View>
          <View style={styles.container}>
            <Text style={styles.text}>Create new password</Text>
           
        <Input 
        placeholder="Enter your email address"
        label="Old Password" iconName="lock-outline"
        password
        />
        <Input 
        placeholder="Enter your email address"
        label="Enter New Password" iconName="lock-outline"
        password
        />
        <Input 
        placeholder="Enter your password"
        label="Re-type Password" iconName="lock-outline"
        password
        />
        <Button onPress={() => {
          Alert.alert("Password sucessfully created");
        }} title="Create"/>
          </View>
        </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        width,
        height: height/2,
        backgroundColor:'white',
        marginTop:60,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    con:{
        flex:1,
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