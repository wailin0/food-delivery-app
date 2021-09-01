import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {flexRowSpace} from "../../constants/styles";
import {color} from "../../constants/theme";
import {restaurants} from "../../dummy";

const History = () => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.root}>
                <Image
                    source={{uri: item.photoURL}}
                    style={styles.image}
                />
                <View style={styles.itemContainer}>
                    <Text>Kichi Coffe & Drink</Text>
                    <View style={{...flexRowSpace, marginTop: 20}}>
                        <Text style={styles.number}>
                            3 Items
                        </Text>
                        <Text style={styles.date}>
                            Yesterday
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{padding: 10}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={restaurants}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 5,
        padding: 20
    },
    image: {
        width: 100, height: 100,
        backgroundColor: color.lightgray,
        borderRadius: 5
    },
    itemContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    id: {
        color: color.primary,
        fontWeight: 'bold'
    },
    date: {
        color: 'gray',
    },
    number: {
        color: 'gray'
    }
})


export default History
