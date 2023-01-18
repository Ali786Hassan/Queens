import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Arrowleft from 'react-native-vector-icons/Feather';
export default function Card({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
         <Arrowleft
                    onPress={()=>  navigation.goBack()} 
                    style={{marginTop:10,alignSelf:'center',marginTop:60,marginLeft:-330}}
                    name="arrow-left-circle"
                    color={'black'}
                    size={30}
                />
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>Card screen</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})