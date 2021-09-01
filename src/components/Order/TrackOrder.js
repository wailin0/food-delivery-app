import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {flexRow, flexRowSpace} from "../../constants/styles";
import {Feather} from "@expo/vector-icons";
import {color} from "../../constants/theme";
import MapView, {Marker} from 'react-native-maps';
import {Modalize} from "react-native-modalize";


const status = [
    {
        title: "Confirmed Your Order",
        time: "9:12AM"
    },
    {
        title: "Order Picked up at Restaurant",
        time: null
    },
    {
        title: "Delivering",
        time: null
    },
    {
        title: "Arrived at Your Location",
        time: null
    }
]


const TrackOrder = () => {
    const [state, setState] = useState(null);
    const modalizeRef = useRef(null);

    useEffect(() => {
        setState({
            markerData: {
                latitude: 40.679855,
                longitude: -74.089859,
            },
            mapData: {
                latitude: 40.679855,
                longitude: -74.089859,
                latitudeDelta: 0.010,
                longitudeDelta: 0.010,
            },
        });
    }, []);

    if (!state) {
        return null
    }


    const Header = () => {
        return (
            <View style={styles.headerContainer}>
                <Feather name="arrow-left" size={25} color='black'/>
                <Text style={{fontWeight: 'bold'}}>Tracking on Map</Text>
                <View></View>
            </View>
        )
    }

    const Divider = () => {
        return (
            <View style={styles.divider}>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {Header()}

            <MapView
                style={{
                    flex: 1,
                }}
                initialRegion={state.mapData}
            >
                <Marker
                    coordinate={state.markerData}
                />
            </MapView>


            <Modalize
                ref={modalizeRef}
                alwaysOpen={85}
                handlePosition="inside"
            >
                <View style={styles.modal}>
                    <Text style={styles.title}>
                        Your foods is coming in 4:33
                    </Text>
                    {Divider()}
                    <View style={{...flexRowSpace}}>
                        <Image
                            source={{uri: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627980457/food_delivery_app/restaurants/yekzeo3ffzarrxoksczo.jpg'}}
                            style={styles.restaurantPhoto}
                        />
                        <View style={styles.detailContainer}>
                            <Text style={styles.title}>Kichi Coffe & Drink</Text>
                            <View style={{...flexRow}}>
                                <Text style={{color: color.primary}}>
                                    Id:
                                </Text>
                                <Text>
                                    33343
                                </Text>
                            </View>
                            <View style={{...flexRowSpace}}>
                                <Text style={{color: 'gray'}}>4 items</Text>
                                <Text style={{color: color.primary}}>Delivery</Text>
                            </View>
                        </View>
                    </View>
                    {Divider()}
                    <View style={{...flexRowSpace}}>
                        <Image
                            source={{uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}}
                            style={styles.deliveryBoyPhoto}
                        />
                        <View style={{flex: 1, marginLeft: 5}}>
                            <Text style={{fontWeight: 'bold'}}>
                                Devin Stokes
                            </Text>
                            <View style={{...flexRow}}>
                                <Feather name="star" size={15} color={color.primary}/>
                                <Text style={{marginLeft: 5}}>3.4</Text>
                            </View>
                        </View>
                        <View style={{...flexRow}}>
                            <TouchableOpacity
                                style={{...styles.button, backgroundColor: '#9090df'}}
                            >
                                <Feather name="message-circle" size={20} color='white'/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{...styles.button, marginLeft: 10, backgroundColor: '#7bde74'}}
                            >
                                <Feather name="phone" size={20} color='white'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {Divider()}

                    <View>
                        <Text style={styles.title}>
                            TRIP
                        </Text>
                        {status.map((status, index) =>
                            <View
                                key={index}
                                style={styles.progressContainer}
                            >
                                <View style={{
                                    ...styles.progressCheckIcon,
                                    backgroundColor: status.time ? '#7a964a' : '#e7d7d7'
                                }}>
                                    {status.time && <Feather name="check" size={15} color='white'/>}
                                </View>
                                <Text style={{flex: 1, marginLeft: 10}}>{status.title}</Text>
                                <Text>{status.time}</Text>
                                {index!==3 &&
                                    <View style={{
                                        ...styles.verticalBar,
                                        borderLeftColor: status.time ? '#7a964a' : '#e7d7d7',
                                    }}>

                                    </View>
                                }
                            </View>
                        )}
                    </View>

                </View>
            </Modalize>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        ...flexRowSpace,
        padding: 10,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        top: 0
    },
    modal: {
        padding: 10,
        marginTop: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    restaurantPhoto: {
        width: 100, height: 100,
        borderRadius: 5
    },
    detailContainer: {
        flex: 1, marginLeft: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    divider: {
        width: '100%',
        borderBottomWidth: 2,
        marginVertical: 15,
        borderBottomColor: '#eee9e9'
    },
    button: {
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50, height: 40
    },
    deliveryBoyPhoto: {
        width: 60, height: 60,
        borderRadius: 5
    },
    progressContainer: {
        ...flexRowSpace,
        marginBottom: 30
    },
    progressCheckIcon: {
        borderRadius: 44,
        width: 20, height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    verticalBar: {
        position: 'absolute',
        height: 30,
        zIndex: 2,
        top: 20,
        left: 9,
        borderLeftWidth: 2
    }
})

export default TrackOrder
