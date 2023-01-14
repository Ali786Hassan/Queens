import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Bellicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navicon from 'react-native-vector-icons/Fontisto';
import colors from '../Assets/Config/colors';
import Plants from '../Screens/Plants';
const width = Dimensions.get('window').width / 2 - 30;
const Home = ({navigation}) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  const CategoryList = () => {
    return (
      
      <View style={style.categoryContainer}>
        
        <StatusBar translucent backgroundColor="#D3D3D3" />
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({plant}) => {
    return (
      
      <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', Plants)}
        activeOpacity={0.8}
        >
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: plant.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2)',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={plant.like ? colors.red1 : colors.black}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain', width:200,height:200}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10 , color:'black'}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold',color:'#00B761'}}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: colors.Google1,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 23,marginTop:-3, color: colors.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: colors.white}}>
      
        <View style={style.header}>
          <TouchableOpacity style={{marginTop:10,height:30,height:30,}}
            onPress={() => navigation.openDrawer()}>
           <Icon name="menu" color="#000" size={30}/>
          </TouchableOpacity>
          <Text style={{fontSize: 28,fontFamily: 'Feather', fontWeight: 'bold',color:colors.black,marginLeft:130,marginTop:10}}>Home</Text>
          <Bellicon name="bell-badge-outline" size={29} style={{color:colors.black,marginTop:15,marginLeft:125}} />
        </View>
      <View>
        <Text style={{fontSize: 38, color: colors.Google,fontFamily: 'Feather', fontWeight: 'bold',marginTop:10,marginBottom:-13}}>
            Hi Ali!
          </Text>
          <Text style={{fontSize:15,fontFamily: 'Feather',color:colors.lightgray,marginTop:10,marginBottom:-10}}>Search your favourite shoes here</Text>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={colors.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={Plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />
       
    </SafeAreaView>
     
    
   
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'gray', fontWeight: 'bold'},
  categoryTextSelected: {
    color: colors.Google1,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: colors.Google1,
  },
  card: {
    height: 225,
    backgroundColor: "#f9f9f9",
    width,
    elevation:4,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: "#f9f9f9",
    elevation:5,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    flex: 1,
    color: colors.black,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: colors.Google1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;