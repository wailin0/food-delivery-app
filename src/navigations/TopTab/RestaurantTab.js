import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from "react";
import Foods from "../../components/Restaurant/Foods";
import Reviews from "../../components/Restaurant/Reviews";
import Information from "../../components/Restaurant/Information";
import {color} from "../../constants/theme";

const Tab = createMaterialTopTabNavigator();

const RestaurantTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: color.primary,
                tabBarInactiveTintColor: color.gray,
                tabBarIndicatorStyle: {backgroundColor: color.primary},
                tabBarLabelStyle: {
                    textTransform: 'none'
                },
                tabBarStyle: {
                    marginBottom: 10
                }
            }}
        >
            <Tab.Screen name="Foods" component={Foods}/>
            <Tab.Screen name="Reviews" component={Reviews}/>
            <Tab.Screen name="Information" component={Information}/>
        </Tab.Navigator>
    );
}

export default RestaurantTab
