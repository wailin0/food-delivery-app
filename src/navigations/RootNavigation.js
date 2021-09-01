import {createStackNavigator} from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import React from "react";
import Search from "../screens/Search";
import Restaurant from "../screens/Restaurant";
import ProfileDetail from "../components/Profile/ProfileDetail";
import PaymentsMethods from "../components/Profile/PaymentMethods";
import Address from "../components/Profile/Address";


const Stack = createStackNavigator()

const RootNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='BottomTab'
        >
            <Stack.Screen name='BottomTab' component={BottomTab}/>
            <Stack.Screen name='Search' component={Search}/>
            <Stack.Screen name='Restaurant' component={Restaurant}/>

            <Stack.Screen name='Profile Detail' component={ProfileDetail}/>
            <Stack.Screen name='Payment Methods' component={PaymentsMethods}/>
            <Stack.Screen name='Address' component={Address}/>
        </Stack.Navigator>
    );
};

export default RootNavigation;
