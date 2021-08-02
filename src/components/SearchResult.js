import React from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {color} from "../constants/theme";
import {restaurants} from "../dummy";

const SearchResult = () => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    marginBottom: 20,
                    borderRadius: 5,
                    padding: 5
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

                    <View
                        style={{
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
                        }}
                    >
                        <Text
                            style={{
                                color: color.primary,
                                fontSize: 12
                            }}
                        >
                            FREE DELIVERY
                        </Text>
                    </View>
                </View>

                <Feather name="bookmark" size={20} color="black"/>

            </TouchableOpacity>
        )
    }


    return (
        <View style={{
            paddingHorizontal: 10,
            marginTop: 20,
            flex: 1
        }}>
            <Text style={{marginBottom: 20}}>
                Found 23 results
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={restaurants}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default SearchResult
