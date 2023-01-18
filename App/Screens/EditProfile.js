import { ImageBackground, StyleSheet, Text, TouchableOpacity,TextInput, View, TurboModuleRegistry } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrowleft from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../Assets/Config/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import React,{useRef,useMemo,useCallback} from 'react';


const EditProfile = ({navigation}) => {
  const snapPoints = useMemo( () => ['25%' , '40%'], []);

 // callbacks
  const handleSheetChange = useCallback( index => {
    console.log(index);
  }, []);
  
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <RBSheet 
        ref={refRBSheet}
        closeOnPressMask={false}
        closeOnDragDown={true}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        height={300}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        customStyles={{
          wrapper: {
            // borderTopLeftRadius:30,
            // borderTopRightRadius:30,
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
       <TouchableOpacity style={styles.panelButton}>
         <Text style={styles.panelButtonTitle}>Take Photo</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.panelButton} >
         <Text style={styles.panelButtonTitle}>Choose From Library</Text>
       </TouchableOpacity>
       <TouchableOpacity  onPress={() => refRBSheet.current.close()}
         style={styles.panelButton}
         >
         <Text style={styles.panelButtonTitle}>Cancel</Text>
       </TouchableOpacity>

      </RBSheet>
      
       <Arrowleft
                    onPress={()=>  navigation.goBack()} 
                    style={{marginTop:45,alignSelf:'center',marginLeft:-360}}
                    name="arrow-left-circle"
                    color={'black'}
                    size={30}
                />
      <View style={{margin:20}}>
       <View style={{alignItems:'center'}}>
         <TouchableOpacity onPress={() => refRBSheet.current.open()}>
             <View style={{height:100,width:100,borderRadius:15,marginTop:-50,justifyContent:'center',alignItems:'center'}}>
               <ImageBackground
               source={require('../Assets/Images/men.png')}
               style={{height:100,width:100,marginTop:20}}
               imageStyle={{borderRadius:15}}>
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                   <Icon name='camera' size={35} color="#fff" style={{opacity:0.7,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#fff',borderRadius:10}}/>
                 </View>
               </ImageBackground>
             </View>
         </TouchableOpacity>
         <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>
          Ali Hassan
         </Text>
       </View>
       <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color={colors.text} size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            sstyle={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={colors.text} size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        {/* <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={{fontSize:20,fontWeight: 'bold',color: 'white',}}>Submit</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
};

export default EditProfile;

const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:'#ffffff'

 },
 commandButton: {
  padding: 15,
  borderRadius: 10,
  backgroundColor: '#186DEE',
  elevation:4,
  alignItems: 'center',
  marginTop: 10,
},
panel: {
  padding: 20,
  backgroundColor: '#FFFFFF',
  paddingTop: 20,
},
panelButtonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:10,
    color: 'white',
  },
header: {
  backgroundColor: '#FFFFFF',
  shadowColor: '#333333',
  shadowOffset: {width: -1, height: -3},
  shadowRadius: 2,
  shadowOpacity: 0.4,
  // elevation: 5,
  paddingTop: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
panelHeader: {
  alignItems: 'center',
},
panelHandle: {
  width: 40,
  height: 8,
  borderRadius: 4,
  backgroundColor: '#00000040',
  marginBottom: 10,
},
panelTitle: {
  fontSize: 27,
  height: 35,
},
panelSubtitle: {
  fontSize: 14,
  color: 'gray',
  height: 30,
  marginBottom: 10,
},
panelButton: {
  //padding: 13,
  width:'90%',
  height:50,
  marginLeft:20,
  borderRadius: 10,
  backgroundColor: '#186DEE',
  alignItems: 'center',
  marginVertical: 7,
},
action: {
  flexDirection: 'row',
  marginTop: 25,
  //marginBottom: ,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5,
},
actionError: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#FF0000',
  paddingBottom: 5,
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},

})