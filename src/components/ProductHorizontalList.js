import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {color} from "../constants/theme";

const ProductHorizontalList = ({products, paddingLeft}) => {


    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    marginRight: 10,
                    width: 80,
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Image
                    souce={{uri: item.photoURL}}
                    style={{
                        width: '100%', height: 80,
                        backgroundColor: 'red',
                        borderRadius: 5
                    }}
                />
                <Text numberOfLines={2} style={{flex: 1}}>
                    {item.name}
                </Text>
                <Text style={{color: color.primary}}>
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

export default ProductHorizontalList
