import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {flexRow} from "../../constants/styles";
import {color} from "../../constants/theme";

const OrderList = ({orders,navigation}) => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("Track Order")}
                style={styles.root}
            >
                <Image
                    source={{uri: item.photoURL}}
                    style={styles.image}
                />
                <View style={styles.itemContainer}>
                    <Text>Kichi Coffe & Drink</Text>
                    <View style={{...flexRow}}>
                        <Text numberOfLines={1} style={styles.id}>
                            Id:
                        </Text>
                        <Text> 11HB344</Text>
                    </View>
                    <Text style={styles.reviewsNumber}>
                        3 Items
                    </Text>
                </View>
                <Text style={{
                    color:color.primary,
                    fontWeight:'bold',
                    alignSelf:'flex-end'
                }}>
                    Delivering
                </Text>

            </TouchableOpacity>
        )
    }

    return (
        <View style={{padding: 10}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    reviewsNumber: {
        color: 'gray'
    }
})

export default OrderList
