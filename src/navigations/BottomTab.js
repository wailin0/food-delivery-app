import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Favourite from "../screens/Favourite";
import Order from "../screens/Order";
import {Feather} from '@expo/vector-icons';
import Nearby from "../screens/Nearby";
import {color} from "../constants/theme";
import {Text} from "react-native";

const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    background: 'transparent',
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: ({focused}) => <Text style={{color: focused ? color.primary : color.gray,fontSize:10}}>Home</Text>,
                    tabBarIcon: ({focused}) => <Feather name="home" size={24}
                                                        color={focused ? color.primary : color.gray}/>
                }}
            />
            <Tab.Screen
                name="Nearby"
                component={Nearby}
                options={{
                    tabBarLabel: ({focused}) => <Text style={{color: focused ? color.primary : color.gray,fontSize:10}}>Nearby</Text>,
                    tabBarIcon: ({focused}) => <Feather name="compass" size={24}
                                                        heart             color={focused ? color.primary : color.gray}/>
                }}
            />
            <Tab.Screen
                name="Order"
                component={Order}
                options={{
                    tabBarLabel: ({focused}) => <Text style={{color: focused ? color.primary : color.gray,fontSize:10}}>Order</Text>,
                    tabBarIcon: ({focused}) => <Feather name="shopping-bag" size={24}
                                                        color={focused ? color.primary : color.gray}/>
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: ({focused}) => <Text style={{color: focused ? color.primary : color.gray,fontSize:10}}>Favourite</Text>,
                    tabBarIcon: ({focused}) => <Feather name="heart" size={24}
                                                        color={focused ? color.primary : color.gray}/>
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: ({focused}) => <Text style={{color: focused ? color.primary : color.gray,fontSize:10}}>Profile</Text>,
                    tabBarIcon: ({focused}) => <Feather name="user" size={24}
                                                        color={focused ? color.primary : color.gray}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab
