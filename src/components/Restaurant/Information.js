import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

const Information = () => {
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>Information</Text>

            <Text style={styles.info}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur eligendi fugiat
                labore, maxime minima molestiae nam nisi numquam placeat porro provident quas quibusdam quis
                reprehenderit sint vitae voluptas voluptate.
            </Text>

            <Text style={{...styles.title, marginTop: 20}}>Address</Text>

            <View style={styles.map}>
                <Image
                    resizeMode='cover'
                    source={{uri: 'https://res.cloudinary.com/dt4ob4b4c/image/upload/v1627991566/food_delivery_app/app/iosn7o08qjt5o1otbb1r.png'}}
                    style={{
                        width:'100%',
                        backgroundColor:'red',
                        height:200
                    }}
                />
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 10,
        flex:1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17
    },
    info: {
        marginTop: 10,
        fontSize: 15
    },
    map:{
        marginTop: 10
    }
})

export default Information
