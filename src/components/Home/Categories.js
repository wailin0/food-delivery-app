import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TitleHeader from "../TitleHeader";
import {categories} from "../../dummy";
import React from "react";

const Categories = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
            >
                <Image
                    source={{uri: item.photoURL}}
                    style={styles.categoryPhoto}
                />
                <Text style={styles.categoryName}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.root}>
            <TitleHeader navigation={navigation} title='Categories' goTo=''/>
            <View style={styles.flexContainer}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={categories}
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
    flexContainer: {
        marginTop: 10
    },
    categoryPhoto: {
        width: 70,
        borderRadius: 3,
        height: 70,
        backgroundColor: 'gray'
    },
    itemContainer: {
        marginRight: 10
    },
    categoryName: {
        textAlign: 'center',
        marginTop: 5
    }
})

export default Categories
