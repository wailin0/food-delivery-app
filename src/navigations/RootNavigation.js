import {createStackNavigator} from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import React from "react";
import Search from "../screens/Search";
import Restaurant from "../screens/Restaurant";


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
            <Stack.Screen name='Search' component={Search}/>
            <Stack.Screen name='Restaurant' component={Restaurant}/>
        </Stack.Navigator>
    );
};

export default RootNavigation;
