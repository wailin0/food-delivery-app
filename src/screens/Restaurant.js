import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons";
import {color} from "../constants/theme";
import Header from "../components/Restaurant/Header";
import {flexRow} from "../constants/styles";
import TabBar from "../components/Restaurant/TabBar";

const Restaurant = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ImageBackground
                    source={{uri: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980500/food_delivery_app/restaurants/uu4kph76reiiqsulipvg.jpg'}}
                    style={styles.restaurantPhoto}
                >
                    <View style={styles.opacityBackground}>
                    </View>
                    <View>
                        <Header navigation={navigation}/>
                        <Text style={styles.name}>Kichi Coffe
                            & Drink</Text>
                        <View style={{...flexRow, marginVertical: 10}}>
                            <Feather name='map-pin' size={14} color='white'/>
                            <Text style={styles.location}>343 Eight Avenue , New York</Text>
                        </View>
                        <View style={{...flexRow}}>
                            <Feather name='star' size={14} color='gold'/>
                            <Text style={styles.rating}>4.5 (123 Reviews)</Text>
                        </View>
                    </View>
                </ImageBackground>


                <TabBar />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    restaurantPhoto: {
        backgroundColor: color.lightgray,
        paddingHorizontal: 10,
        paddingBottom: 30,
        height: 170
    },
    opacityBackground: {
        position: 'absolute',
        backgroundColor: 'rgba(40,40,40,0.5)',
        width: '100%',
        left: 0,
        height: '100%'
    },
    name: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    location: {
        fontSize: 14,
        color: 'white'
    },
    rating:{
        fontSize: 13,
        color: 'white'
    }
})

export default Restaurant
