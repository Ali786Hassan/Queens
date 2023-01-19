import React from 'react';
import { View, Text, ImageBackground,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
const CustomDrawer = (props) => {
  return (
  <View style={{flex:1}}>
    <DrawerContentScrollView {...props}
     contentContainerStyle={{backgroundColor:'#186DEE'}} >
        <ImageBackground source={require('../Assets/Images/Rectangle.png')} style={{padding:30,marginTop:-3}}>
         <Image source={require('../Assets/Images/man.png')} style={styles.image}/>
          <Text style={{color:'#fff',fontSize:18,marginLeft:-4}}>Hi john</Text>
        </ImageBackground>
        <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
        <DrawerItemList {...props}/>
        </View>
    </DrawerContentScrollView>
    <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
      <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         <Ionicons name='share-social-outline' size={22} style={{color:'#333'}}/>
         <Text style={{fontSize:15,marginLeft:10,color:'#333'}}>Share</Text>
         </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         <Ionicons name='exit-outline' size={22} style={{color:'#333'}}/>
         <Text style={{fontSize:15,marginLeft:10,color:'#333'}}>Sign Out</Text>
         </View>
      </TouchableOpacity>
    </View>
    
  </View>
  )
};

const styles = StyleSheet.create({
    image:{
        height:70,
        width:70,
        marginLeft:-10,
        marginTop:-10,
        borderRadius:40,
        //marginBottom:10
    }
})

export default CustomDrawer;