import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import TitleHeader from "../TitleHeader";
import {products, restaurants} from "../../dummy";
import {Feather} from "@expo/vector-icons";
import {color} from "../../constants/theme";
import ProductHorizontalList from "../ProductHorizontalList";
import React from "react";

const NearbyRestaurants = ({navigation}) => {

    return (
        <View style={styles.root}>
            <TitleHeader navigation={navigation} title='Nearby' goTo=''/>


            {restaurants.map(restaurant =>
                <View
                    style={styles.restaurantContainer}
                >
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate("Restaurant")}
                    >
                        <View
                            style={styles.flexRow}
                        >
                            <Image
                                source={{uri: restaurant.photoURL}}
                                style={styles.restaurantPhoto}
                            />
                            <View
                                style={styles.restaurantDetail}>
                                <Text>Kichi Coffe & Drink</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Feather name="map-pin" size={15} color="gray"/>
                                    <Text numberOfLines={1} style={styles.restaurantAddress}>
                                        76A Eight Avenue, New York
                                    </Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Feather name="star" size={15} color="gold"/>
                                    <Text style={styles.rating}>
                                        4.5
                                    </Text>
                                    <Text style={styles.reviewNumber}>
                                        (12 Reviews)
                                    </Text>
                                </View>

                                <View style={styles.restaurantHighlight}>
                                    <Text style={styles.restaurantHighlightText}>
                                        FREE DELIVERY
                                    </Text>
                                </View>
                            </View>

                            <Feather name="bookmark" size={20} color="black"/>

                        </View>
                    </TouchableWithoutFeedback>

                    <ProductHorizontalList products={products} paddingLeft={0}/>
                </View>
            )}


        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 20
    },
    rating: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: 'gray'
    },
    reviewNumber: {
        color: 'gray',
        marginLeft: 5
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    restaurantDetail: {
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    restaurantContainer: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 10,
        padding: 5,
        marginBottom: 10
    },
    restaurantAddress: {
        color: 'gray',
        marginLeft: 5
    },
    restaurantPhoto: {
        width: 100, height: 100,
        backgroundColor: 'red',
        borderRadius: 5
    },
    restaurantHighlight: {
        borderRadius: 5,
        borderColor: color.primary,
        borderWidth: 2,
        width: 100,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        color: color.primary,
        fontSize: 12
    },
    restaurantHighlightText: {
        color: color.primary,
        fontSize: 12
    }
})

export default NearbyRestaurants
