import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {color} from "../../constants/theme";
import OrderList from "./OrderList";
import {restaurants} from "../../dummy";

const Ongoing = ({navigation}) => {
    const [orders, setOrders] = useState(null)

    useEffect(() => {

        setTimeout(() => {
            setOrders(restaurants)
        }, 3000)
    }, [])

    const noOrder = () => {
        return (
            <View style={styles.root}>
                <Image
                    source={{uri: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1630425505/food_delivery_app/app/d8amerhn8kbalihly7mo.png'}}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>
                    Ongoing is Empty
                </Text>
                <Text style={styles.body}>
                    You can go to Discover to add products
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Discover")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Go Discover</Text>
                </TouchableOpacity>
            </View>
        )
    }


    if (!orders){
        return noOrder()
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <OrderList orders={orders} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 160
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    body: {
        color: color.gray,
        marginTop: 10
    },
    button: {
        marginTop: 30,
        backgroundColor: color.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Ongoing
