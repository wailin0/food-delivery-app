import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import BottomTab from "./src/navigations/BottomTab";
import NavigationContainer from "@react-navigation/native/src/NavigationContainer";
import RootNavigation from "./src/navigations/RootNavigation";

export default function App() {
    return (

        <View style={{flex:1,marginTop: StatusBar.currentHeight}}>
            <NavigationContainer>
                <RootNavigation/>
            </NavigationContainer>
        </View>
    )
}
