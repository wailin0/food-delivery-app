import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {products} from "../../dummy";
import {flexRow} from "../../constants/styles";
import {Feather} from "@expo/vector-icons";
import {color} from "../../constants/theme";

const Foods = () => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.root}>
                <Image
                    source={{uri: item.photoURL}}
                    style={styles.image}
                />
                <View style={styles.itemContainer}>
                    <Text numberOfLines={1} style={{width:160}}>{item.name}</Text>
                    <View style={{...flexRow}}>
                        <Feather name="home" size={15} color="gray"/>
                        <Text numberOfLines={1} style={styles.address}>
                            {item.restaurant.name}
                        </Text>
                    </View>
                    <View style={{...flexRow}}>
                        <Feather name="star" size={15} color="gold"/>
                        <Text  style={styles.rating}>
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

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}


const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 5,
        padding: 20
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
    address: {
        color: 'gray',
        marginLeft: 5
    },
    reviewsNumber: {
        color: 'gray',
        marginLeft: 5
    }
})

export default Foods
