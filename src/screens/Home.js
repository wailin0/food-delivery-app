import {FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {color} from "../constants/theme";
import {Feather} from '@expo/vector-icons';
import Promos from "../components/Promos";
import {categories, product, products, restaurants} from "../dummy";
import Nearby from "./Nearby";

const Home = () => {

    const Header = () => {
        return (
            <View style={{
                padding: 10,
                backgroundColor: color.primary,
            }}>
                <Text>Delivering to</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10
                }}>
                    <Feather name="map-pin" size={15} color="white"/>
                    <Text style={{color: 'white', marginLeft: 5}}>
                        5343A Egiht Avenue, NEw Yorkm US
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        paddingBottom: 10
                    }}
                >
                    <TextInput
                        placeholder='Searching...'
                        style={{
                            paddingLeft: 40,
                            paddingRight: 10,
                            height: 40,
                            borderRadius: 5,
                            backgroundColor: 'white',
                            marginRight: 20,
                            flex: 1
                        }}
                    />
                    <Feather name="filter" size={24} color="white"/>
                </View>
            </View>
        )
    }

    const Categories = () => {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        marginRight: 10
                    }}
                >
                    <Image
                        source={{uri: item.photoURL}}
                        style={{
                            width: 70,
                            borderRadius: 3,
                            height: 70,
                            backgroundColor: 'red'
                        }}
                    />
                    <Text style={{textAlign: 'center', marginTop: 5}}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }


        return (
            <View style={{
                marginTop: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10
                }}>
                    <Text>Categories</Text>
                    <TouchableOpacity>
                        <Text style={{color: color.primary}}>View all >></Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 10}}>
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

    const PopularOrders = () => {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        width: 120,
                        marginRight: 10,
                        backgroundColor: 'white'
                    }}
                >
                    <Image
                        source={{uri: item.photoURL}}
                        style={{
                            width: '100%',
                            height: 100,
                            backgroundColor: 'red'
                        }}
                    />
                    <View style={{padding: 5}}>
                        <Text
                            numberOfLines={1}
                        >
                            {item.name}
                        </Text>
                        <Text numberOfLines={1} style={{fontSize: 12, color: 'gray'}}>
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
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10
                }}>
                    <Text>Popular Orders</Text>
                    <TouchableOpacity>
                        <Text style={{color: color.primary}}>View all >></Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 10}}>
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

    const PopularRestaurants = () => {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        width: 120,
                        marginRight: 10,
                        backgroundColor: 'white'
                    }}
                >
                    <Image
                        source={{uri: item.photoURL}}
                        style={{
                            width: '100%',
                            height: 100,
                            backgroundColor: 'red'
                        }}
                    />
                    <View style={{padding: 5}}>
                        <Text
                            numberOfLines={1}
                        >
                            {item.name}
                        </Text>
                        <Text numberOfLines={1} style={{fontSize: 12, color: 'gray'}}>
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
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10
                }}>
                    <Text>Popular Restaurants</Text>
                    <TouchableOpacity>
                        <Text style={{color: color.primary}}>View all >></Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 10}}>
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


    const NearbyRestaurants = () => {


        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        marginRight: 10,
                        width: 80
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
                    <Text numberOfLines={2}>
                        {item.name}
                    </Text>
                    <Text style={{color: color.primary}}>
                        ${item.price}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{
                marginTop: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginBottom: 10
                }}>
                    <Text>Nearby</Text>
                    <TouchableOpacity>
                        <Text style={{color: color.primary}}>View all >></Text>
                    </TouchableOpacity>
                </View>

                {[1, 2, 3].map(restaurant =>
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 5,
                            marginHorizontal: 10,
                            padding: 10,
                            marginBottom: 10
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
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
                            <View style={{marginLeft: 10, flexDirection: 'column', justifyContent: 'space-between'}}>
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

                        </View>


                        <View style={{marginTop: 10}}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={products}
                                renderItem={renderItem}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                    </View>
                )}


            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {Header()}
            <ScrollView style={{flex: 1}}>
                <Promos/>
                {Categories()}
                {PopularOrders()}
                {PopularRestaurants()}
                {NearbyRestaurants()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
