import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {color} from "../constants/theme";

const ProductHorizontalList = ({products, paddingLeft}) => {


    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.root}>
                <Image
                    source={{uri: item.photoURL}}
                    style={styles.image}
                />
                <Text numberOfLines={2} style={{flex: 1}}>
                    {item.name}
                </Text>
                <Text style={styles.price}>
                    ${item.price}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{marginTop: 10}}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{paddingLeft}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        marginRight: 10,
        width: 80,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    image:{
        width: '100%', height: 80,
        backgroundColor: color.lightgray,
        borderRadius: 5
    },
    price:{
        color: color.primary
    }
})

export default ProductHorizontalList
