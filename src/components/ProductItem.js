import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons";

const ProductItem = ({product}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginBottom: 10,
                borderRadius: 5
            }}
        >
            <Image
                source={{uri: 'http'}}
                style={{
                    width: 100, height: 100,
                    backgroundColor: 'red',
                    borderRadius: 5
                }}
            />
            <View
                style={{marginLeft: 10, flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <Text>Kichi Coffe & Drink</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Feather name="map-pin" size={15} color="gray"/>
                    <Text numberOfLines={1} style={{
                        color: 'gray',
                        marginLeft: 5
                    }}>
                        76A Eight Avenue, New York
                    </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Feather name="star" size={15} color="gold"/>
                    <Text style={{
                        fontWeight: 'bold',
                        marginLeft: 5,
                        color: 'gray'
                    }}>
                        4.5
                    </Text>
                    <Text style={{
                        color: 'gray',
                        marginLeft: 5
                    }}>
                        (12 Reviews)
                    </Text>
                </View>
            </View>

            <Feather name="bookmark" size={20} color="black"/>

        </TouchableOpacity>
    )
}

export default ProductItem
