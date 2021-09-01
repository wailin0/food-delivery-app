import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import StackHeader from "../StackHeader";
import React from "react";
import {flexRowSpace} from "../../constants/styles";
import {Feather} from "@expo/vector-icons";

const address = [
    {
        id: 1,
        name: 'Home',
        address: '$3A Egith Avenue Adnora Mercy New York City',
        aliasName: 'Wai Lin',
        phone: '+1 3322222'
    },
    {
        id: 2,
        name: 'My Work',
        address: '$3A Lederner Felds Apt,  New York City',
        aliasName: 'Wai Lin2',
        phone: '+1 32323 23'
    }
]

const Address = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StackHeader navigation={navigation}/>
            <View style={{
                flex: 1,
                paddingHorizontal: 10
            }}>
                <Text style={{fontSize: 25, marginBottom: 20, fontWeight: 'bold'}}>
                    Address
                </Text>

                {address.map(address =>
                    <TouchableOpacity
                        key={address.id}
                        style={{
                            backgroundColor: 'white',
                            ...flexRowSpace,
                            borderRadius: 5,
                            marginBottom: 10,
                            padding: 10
                        }}
                    >
                        <View style={{
                            width: '80%'
                        }}>
                            <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 20}}>
                                {address.name}
                            </Text>
                            <View style={{...flexRowSpace}}>
                                <Feather name="map-pin" size={15} color='gray'/>
                                <Text
                                    numofLines={2}
                                    style={{
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        flex: 1,
                                        marginBottom: 5
                                    }}
                                >{address.address}</Text>
                            </View>
                            <View style={{...flexRowSpace}}>
                                <Feather name="map-pin" size={15} color='gray'/>
                                <Text style={{
                                    fontWeight: 'gray',
                                    marginLeft: 5,
                                    flex: 1,
                                    marginBottom: 5
                                }}>{address.aliasName}
                                </Text>
                            </View>
                            <View style={{...flexRowSpace}}>
                                <Feather name="map-pin" size={15} color='gray'/>
                                <Text
                                    style={{
                                        fontWeight: 'gray',
                                        marginLeft: 5,
                                        flex: 1,
                                        marginBottom: 5
                                    }}
                                >{address.phone}
                                </Text>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={20} color='gray'/>
                    </TouchableOpacity>
                )}


                <TouchableOpacity
                    style={{
                        borderWidth: 2,
                        borderColor: 'gray',
                        borderStyle: 'dotted',
                        borderRadius: 20,
                        paddingVertical: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{fontWeight: 'bold', color: 'gray'}}>Add new address</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Address
