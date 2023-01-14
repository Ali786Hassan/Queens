import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './Navigations/RootNavigator';

const stack = createNativeStackNavigator();

const App =() => {
  return(
    <RootNavigator/>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"white",
  },
})