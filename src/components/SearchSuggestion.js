import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {flexRow} from "../constants/styles";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {color} from "../constants/theme";
import {products} from "../dummy";

const SearchSuggestion = () => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10
                }}
            >
                <Image
                    souce={{uri: item.photoURL}}
                    style={{
                        width: 40, height: 40,
                        borderRadius: 5,
                        backgroundColor: 'red'
                    }}
                />
                <Text>Asia Foods</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{marginTop: 10, paddingHorizontal: 10}}>
            <View style={{...flexRow, marginBottom: 10}}>
                <Text style={{fontWeight: 'bold'}}>History</Text>
                <Text style={{color: 'gray'}}>Clear all</Text>
            </View>

            {['Milk Tea', 'Rice Chicken', 'Coffee'].map((text, index) =>
                <View key={index} style={{...flexRow, marginBottom: 10}}>
                    <Text style={{color: 'gray'}}>{text}</Text>
                    <Feather name="x" size={15} color="gray"/>
                </View>
            )}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: color.primary, marginRight: 5}}>View more</Text>
                <Feather name="chevron-down" size={15} color={color.primary}/>
            </View>

            <View style={{
                marginTop: 20
            }}>
                <View style={{...flexRow}}>
                    <Text style={{fontWeight: 'bold'}}>Suggestions</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: color.primary}}>View all</Text>
                        <Feather name="chevrons-right" size={15} color={color.primary}/>
                    </View>
                </View>

                <View style={{marginTop: 10}}>
                    <FlatList
                        data={products}
                        renderItem={renderItem}
                        numColumns={2}
                        keyExtractor={item => item.id.toString()}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                    />
                </View>
            </View>
        </View>
    )
}

export default SearchSuggestion
