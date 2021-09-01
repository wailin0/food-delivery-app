import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {flexRowSpace} from "../constants/styles";
import {color, font} from "../constants/theme";
import RestaurantList from "../components/RestaurantList";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Foods from "../components/Favorite/Foods";

const Tab = createMaterialTopTabNavigator();

const Favourite = () => {

    const Header = () => {
        return (
            <View style={styles.container}>
                <Text style={{...font.title}}>
                    Favourite
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
                <Tab.Screen name="Foods" component={Foods}/>
                <Tab.Screen name="Restaurants" component={RestaurantList}/>
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

export default Favourite
