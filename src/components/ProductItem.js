import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons";
import {color} from "../constants/theme";
import {flexRow} from "../constants/styles";

const ProductItem = ({product}) => {
    return (
        <TouchableOpacity style={styles.root}>
            <Image
                source={{uri: product.photoURL}}
                style={styles.image}
            />
            <View style={styles.itemContainer}>
                <Text>Kichi Coffe & Drink</Text>
                <View style={{...flexRow}}>
                    <Feather name="map-pin" size={15} color="gray"/>
                    <Text numberOfLines={1} style={styles.address}>
                        76A Eight Avenue, New York
                    </Text>
                </View>
                <View style={{...flexRow}}>
                    <Feather name="star" size={15} color="gold"/>
                    <Text style={styles.rating}>
                        4.5
                    </Text>
                    <Text style={styles.reviewsNumber}>
                        (12 Reviews)
                    </Text>
                </View>
            </View>

            <Feather name="heart" size={20} color="black"/>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 5
    },
    image: {
        width: 100, height: 100,
        backgroundColor: color.lightgray,
        borderRadius: 5
    },
    itemContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    rating: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: 'gray'
    },
    address:{
        color: 'gray',
        marginLeft: 5
    },
    reviewsNumber: {
        color: 'gray',
        marginLeft: 5
    }
})

export default ProductItem
