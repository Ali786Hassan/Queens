import { View, Text,StyleSheet,TextInput } from 'react-native'
import React, { useState } from 'react'
import colors from '../Assets/Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Input = ({label,
iconName,error,
password,
onFocus = () => {},
...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password)
  return (
    <View style={{marginBottom:20}}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer,
        {borderColor: error
           ? colors.red
           : isFocused
           ? colors.darkgray
           : colors.light},
           ]}>
        <Icon name={iconName} style={{fontSize:20 ,color:colors.darkgray,marginRight:10}}/>
       <TextInput 
       secureTextEntry={hidePassword}
       autoCorrect={false}
       onFocus={()=>{
        onFocus();
        setIsFocused(true);
       }}
       onBlur={()=>{
        setIsFocused(false); 
       }}
       style={{color: colors.black,flex:1}}
       {...props}/>
       {password && (
         <Icon 
         onPress={() => setHidePassword(!hidePassword)}
         style={{fontSize:22,color:colors.darkgray}} 
         name={hidePassword ? 'eye-outline' : 'eye-off-outline'}/>
       )}
       
      </View>
      {error && (
        <Text style={{color:colors.red, fontSize:12, marginTop:7}}>{error}</Text>
      )}
      
    </View>
  )
};
const styles = StyleSheet.create({
    label:{
        marginVertical:5,
        fontSize:14,
        margin:20,
        color:colors.lightgray,
    },
    inputContainer:{
        height:55,
        width:'90%',
        alignSelf:'center',
        backgroundColor:colors.secondary,
        borderRadius:25,
        flexDirection:'row',
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:'center',
    },
})
export default Input