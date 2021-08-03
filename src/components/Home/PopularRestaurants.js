import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TitleHeader from "../TitleHeader";
import {restaurants} from "../../dummy";
import React from "react";

const PopularRestaurants = ({navigation}) => {
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
        <View style={{
            marginTop: 20
        }}>
            <TitleHeader navigation={navigation} title='Popular Restaurants' goTo=''/>
            <View style={{marginTop: 10}}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={restaurants}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{paddingLeft: 10}}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 120,
        marginRight: 10,
        backgroundColor: 'white'
    },
    itemPhoto: {
        width: '100%',
        height: 100,
        backgroundColor: 'red'
    },
    itemCategory: {
        fontSize: 12,
        color: 'gray'
    }
})

export default PopularRestaurants
