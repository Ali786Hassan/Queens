import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthNavigations';
import AppStack from './AppStack';
import { StatusBar } from "react-native";
import colors from "../App/Assets/Config/colors";

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AppStack/>
            <StatusBar
      barStyle="light-content"
      backgroundColor={colors.statusbar}
     />
        </NavigationContainer>
    )
}