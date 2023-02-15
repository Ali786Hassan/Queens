import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../Assets/Config/colors';
import Input from '../Components/Input';
import Button from '../Components/Button';
export default function Card() {
  return (
    <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
      <ScrollView
       contentContainerStyle={{
        paddingTop: 50,
        paddingHorizontal:20
       }}
      >
        <Text style={{color:'#000',fontSize:40,fontWeight:'bold'}}>
          Register
        </Text>
        <Text style={{color:'grey',fontSize:18,marginVertical:10}}>
          Enter your details to Register
        </Text>
        <View style={{marginVertical:20}}> 
        <Input 
        placeholder="Enter your email address"
        label="Email" iconName="email-outline"
        />
        <Input 
        placeholder="Enter your password"
        label="Password" iconName="lock-outline"
        password
        />
        <Button title="Register"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})