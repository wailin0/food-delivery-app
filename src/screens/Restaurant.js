import {ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {Feather} from "@expo/vector-icons";
import {color} from "../constants/theme";
import Products from "../components/Restaurant/Products";
import Reviews from "../components/Restaurant/Reviews";
import Information from "../components/Restaurant/Information";

const Restaurant = ({navigation}) => {
    const [tab, setTab] = useState(1)

    const Header = () => {
        return (
            <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Feather name='arrow-left' size={20} color='white'/>
                </TouchableOpacity>
                <Feather name="more-horizontal" size={24} color="white"/>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ImageBackground
                    souce={{uri: 'htt'}}
                    style={{
                        backgroundColor: 'red',
                        paddingHorizontal: 10,
                        paddingBottom: 30
                    }}
                >
                    {Header()}
                    <View style={{marginTop: 30}}>
                        <Text style={{fontSize: 20, color: 'white'}}>Kichi Coffe & Drink</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                            <Feather name='map-pin' size={14} color='white'/>
                            <Text style={{fontSize: 14, color: 'white'}}>343 Eight Avenue , New York</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='star' size={14} color='gold'/>
                            <Text style={{fontSize: 14, color: 'white'}}>343 Eight Avenue , New York</Text>
                        </View>
                    </View>
                </ImageBackground>


                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity
                        style={{
                            ...styles.tab,
                            borderBottomColor: tab === 1 ? color.primary : 'lightgray'
                        }}
                        onPress={() => setTab(1)}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: tab !== 1 && 'gray'
                        }}>Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            ...styles.tab,
                            borderBottomColor: tab === 2 ? color.primary : 'lightgray'
                        }}
                        onPress={() => setTab(2)}
                    >
                        <Text style={{textAlign: 'center', color: tab !== 2 && 'gray'}}>Reviews</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            ...styles.tab,
                            borderBottomColor: tab === 3 ? color.primary : 'lightgray'
                        }}
                        onPress={() => setTab(3)}
                    >
                        <Text style={{textAlign: 'center', color: tab !== 3 && 'gray'}}>Information</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flex: 1,marginTop:20}}>
                    {tab === 1 && <Products/>}
                    {tab === 2 && <Reviews/>}
                    {tab === 3 && <Information/>}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = {
    tab: {
        width: '33.333%',
        borderBottomWidth: 2,
        paddingBottom: 5
    }
}

export default Restaurant
