import {createStackNavigator} from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import Home from "../screens/Home";
import React from "react";


const Stack = createStackNavigator()

const RootNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'
        >
            <Stack.Screen name='Home' component={BottomTab}/>
            <Stack.Screen name='Search' component={Home}/>

        </Stack.Navigator>
    );
};

export default RootNavigation;
