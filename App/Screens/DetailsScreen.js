import React, { useState } from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../Assets/Config/colors';
const DetailsScreen = ({navigation, route}) => {
  const plants = route.params;
 const [count, setCount] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <TouchableOpacity style={style.header}>
        <Icon name="arrow-back" size={28} color={'#000'} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} color={'#000'} onPress={() => navigation.navigate('Card')} />
      </TouchableOpacity>
      <TouchableOpacity style={style.imageContainer}>
        <Image source={plants.img} style={{resizeMode: 'contain', flex: 1}} />
      </TouchableOpacity>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold',color:'#000'}}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plants.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: colors.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ${plants.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10,}}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color:'#000'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {plants.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity 
              onPress={() => setCount(count -1)}
              style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                  color:'black',
                  marginTop:40,
                }}>
                {count}
              </Text>
              <TouchableOpacity
                onPress={() => setCount(count +1)}
                style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={style.buyBtn}>
              <Text
                style={{color: colors.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: colors.white,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: colors.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: colors.Google1,
    backgroundColor: colors.Google1,
    borderWidth: 1,
    borderRadius: 5,
    elevation:4,
    marginTop:40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: '400', fontSize: 28,color: 'white'},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: colors.Google1,
    justifyContent: 'center',
    marginTop:40,
    elevation:4,
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: colors.Google1,
    width: 80,
    height: 40,
    justifyContent: 'center',
    elevation:4,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;