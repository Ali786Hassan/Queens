import { Text, TouchableOpacity } from 'react-native';
import colors from '../Assets/Config/colors';
import React from 'react';

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress}
     style={{
        height:55,
        width:'100%',
        backgroundColor:colors.Google1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        marginTop:15
     }}>
      <Text style={{color:colors.white,fontWeight:'bold',fontSize:18}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button