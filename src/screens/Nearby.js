import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from "react";
import {color, font} from "../constants/theme";
import RestaurantList from "../components/RestaurantList";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {flexRowSpace} from "../constants/styles";
import {Feather} from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();


const NearBy = () => {


    const Header = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Nearby
                </Text>
                <View style={styles.location}>
                    <View style={styles.address}>
                        <Feather name="map-pin" size={15} color="gray"/>
                        <Text numberOfLines={1} style={{width: 150, marginHorizontal: 5}}>
                            76A Eight Avenue, New York
                        </Text>
                        <Feather name="chevron-down" size={15} color="gray"/>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={styles.root}
        >
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
                    tabBarItemStyle: {width: 80},
                    scrollEnabled: true,
                    tabBarScrollEnabled: true
                }}
            >
                <Tab.Screen name="Food" component={RestaurantList}/>
                <Tab.Screen name="Drink" component={RestaurantList}/>
                <Tab.Screen name="Cakes" component={RestaurantList}/>
                <Tab.Screen name="Asia" component={RestaurantList}/>
                <Tab.Screen name="Rice" component={RestaurantList}/>
            </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        ...flexRowSpace,
        padding: 20,
        backgroundColor: 'white'
    },
    title: {...font.title},
    address: {
        ...flexRowSpace,
        backgroundColor: color.lightgray,
        padding: 10,
        borderRadius: 5
    }
})

export default NearBy
