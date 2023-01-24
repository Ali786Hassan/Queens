import { SafeAreaView, StyleSheet, Text,StatusBar, View ,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import {Avatar, Caption, Title, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Assets/Config/colors';
const Profile =({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      
      <StatusBar translucent backgroundColor="#D3D3D3" />
      {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={{width:35,height:35,marginTop:40,marginLeft:10,backgroundColor:'#f8f4f4',borderRadius:5,elevation:4}} >
      <Icon name="menu" color="#000" size={30} style={{marginTop:2,marginLeft:2}}/>
       </View>
      </TouchableOpacity> */}
         <TouchableOpacity style={{marginTop:40,width:35,height:30,marginLeft:10,backgroundColor:'#f8f4f4',elevation:3}}
            onPress={() => navigation.openDrawer()}>
           <Icon name="menu" color="#000" size={30} style={{marginLeft:2}}/>
          </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
        <View style={{width:40,height:40,marginTop:-30,marginLeft:360,backgroundColor:'#f8f4f4',borderRadius:20,elevation:4}}>
      <Icon name="account-edit" color="#000" size={30} style={{marginLeft:5,marginTop:2}}/>
        </View>
      </TouchableOpacity>
      <ScrollView>
    <View style={styles.userinfo}>
      <View style={{marginTop:5,marginLeft:10}}>
        <Avatar.Image
        source={require('../Assets/Images/men.png',)} size={70} style={{marginTop:-1}}/>
        <View>
      <Title>Ali Hassan</Title>
      <Caption>Hi Ali</Caption>
        </View>
       </View>
      </View>
      <View style={styles.userinfo}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color='#777777' size={20}/>
          <Text style={{color:"#777777",marginLeft:20}}>Karachi, Pakistan</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color='#777777' size={20}/>
          <Text style={{color:"#777777",marginLeft:20}}>+92-3172386977</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color='#777777' size={20}/>
          <Text style={{color:"#777777",marginLeft:20}}>ali@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxwrapper}>
        <View style={[styles.infoBox, {
            borderRightColor:'#dddddd',
            borderRightWidth:1
        }]}>
          <Title>$150</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
      
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='heart-outline' color="#FF0000" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='credit-card' color="#FF0000" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='share-outline' color="#FF0000" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='account-check-outline' color="#FF0000" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='settings-outline' color="#FF0000" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffffff',
   
  },
  userinfo:{
    paddingHorizontal:40,
    marginLeft:-15,
    marginBottom:10,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
  },
  caption:{
    fontSize:14,
    lineHeight:14,
    fontWeight:'500',
  },
  row:{
    flexDirection:'row',
    marginBottom:10,
  },
  infoBoxwrapper:{
    borderBottomColor:'#dddddd',
    borderBottomWidth:1,
    borderTopColor:'#dddddd',
    borderTopWidth:1,
    flexDirection:'row',
    height:100,
  },
  infoBox:{
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
export default Profile;