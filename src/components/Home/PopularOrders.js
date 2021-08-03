import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {color} from "../../constants/theme";
import TitleHeader from "../TitleHeader";
import {products} from "../../dummy";
import React from "react";

const PopularOrders = ({navigation}) => {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
            >
                <Image
                    source={{uri: item.photoURL}}
                    style={styles.itemPhoto}
                />
                <View style={{padding: 5}}>
                    <Text
                        numberOfLines={1}
                    >
                        {item.name}
                    </Text>
                    <Text numberOfLines={1} style={styles.itemCategory}>
                        Seafoods & Fried
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.root}>
            <TitleHeader navigation={navigation} title='Popular Orders' goTo=''/>
            <View style={styles.flatListContainer}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{paddingLeft: 10}}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginTop: 20
    },
    flatListContainer: {
        marginTop: 10
    },
    itemContainer: {
        width: 120,
        marginRight: 10,
        backgroundColor: 'white'
    },
    itemPhoto: {
        width: '100%',
        height: 100,
        backgroundColor: color.lightgray
    },
    itemCategory: {
        fontSize: 12,
        color: 'gray'
    }
})

export default PopularOrders
