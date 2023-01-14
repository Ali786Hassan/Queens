import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Assets/Config/colors';
import Arrowleft from 'react-native-vector-icons/Feather';
import React from 'react'

export default function Search({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Arrowleft
                    onPress={()=>  navigation.goBack()} 
                    style={{marginTop:45,alignSelf:'center',marginLeft:-360}}
                    name="arrow-left-circle"
                    color={'black'}
                    size={30}
                />
      <View style={styles.search}>
        {/* <Icon name='search' size={25} style={{marginLeft:10}}/> */}
        <TextInput placeholder='Search' style={styles.input}></TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
    },
    search: {
      height: 50,
      width:'90%',
      marginLeft:20,
      backgroundColor: "#f9f9f9",
      elevation:5,
      borderRadius: 10,
      marginTop:30,
      
    },
    input: {
      fontSize: 18,
      width:'90%',
      height:50,
      color: colors.black,
      backgroundColor:'#f9f9f9',
      paddingLeft:40,
    },
})