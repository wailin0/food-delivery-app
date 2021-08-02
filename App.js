import React from 'react';
import {StatusBar, View} from 'react-native';
import NavigationContainer from "@react-navigation/native/src/NavigationContainer";
import RootNavigation from "./src/navigations/RootNavigation";

export default function App() {
    return (
        <View style={{
            flex: 1,
            marginTop: StatusBar.currentHeight
        }}>
            <NavigationContainer>
                <RootNavigation/>
            </NavigationContainer>
        </View>
    )
}
