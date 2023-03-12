import { Text, TouchableOpacity } from 'react-native';
import colors from '../Assets/Config/colors';
import React from 'react';

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress}
     style={{
        height:55,
        width:'90%',
        alignSelf:'center',
        backgroundColor:colors.Google1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        marginTop:20
     }}>
      <Text style={{color:colors.white,fontWeight:'bold',fontSize:20}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button