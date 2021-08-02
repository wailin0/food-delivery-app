import React, {useContext} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {color} from "../constants/theme";
import Profile from "../screens/Profile";
import Favourite from "../screens/Favourite";
import Order from "../screens/Order";
import Nearby from "../screens/Nearby";

const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    background: 'transparent'
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                // options={{
                //   tabBarIcon: ({focused}) => <Entypo name="home" size={24} color={focused ? color.red : color.gray} />
                // }}
            />
            <Tab.Screen
                name="Nearby"
                component={Nearby}
            />
            <Tab.Screen
                name="Order"
                component={Order}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default BottomTab
