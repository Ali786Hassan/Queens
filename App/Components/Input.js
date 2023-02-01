import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import colors from '../Assets/Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Input = ({label,
iconName,error,
password,
onFocus = () => {},
...props
}) => {
  return (
    <View style={{marginBottom:20}}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer]}>
        <Icon name={iconName} style={{fontSize:20 ,color:colors.darkgray,marginRight:10}}/>
       <TextInput 
       autoCorrect={false}
       onFocus={()=>{
        onFocus();
       }}
       style={{color: colors.grey,flex:1}}
       {...props}/>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
    label:{
        marginVertical:5,
        fontSize:14,
        color:colors.lightgray,
    },
    inputContainer:{
        height:55,
        backgroundColor:colors.secondary,
        borderRadius:25,
        flexDirection:'row',
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:'center',
    },
})
export default Input