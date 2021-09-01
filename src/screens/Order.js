import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {flexRowSpace} from "../constants/styles";
import {color, font} from "../constants/theme";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Ongoing from "../components/Order/Ongoing";
import History from "../components/Order/History";

const Tab = createMaterialTopTabNavigator();

const Order = () => {

    const Header = () => {
        return (
            <View style={styles.container}>
                <Text style={{...font.title}}>
                    Order
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {Header()}

            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: color.primary,
                    tabBarInactiveTintColor: color.gray,
                    tabBarIndicatorStyle: {backgroundColor: color.primary},
                    pressOpacity: 1,
                    tabBarLabelStyle: {
                        textTransform: 'none'
                    },
                }}
            >
                <Tab.Screen name="Ongoing" component={Ongoing}/>
                <Tab.Screen name="History" component={History}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        ...flexRowSpace,
        padding: 20,
        backgroundColor: 'white'
    }
})

export default Order
