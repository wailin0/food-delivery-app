import {FlatList, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import {promos} from "../../dummy";
import {color} from "../../constants/theme";


const Promos = () => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.itemContiner}>
                <Image
                    source={{uri: item.photoURL}}
                    style={styles.promoPhoto}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{marginTop: 10}}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={promos}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{paddingLeft: 10}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: 10
    },
    promoPhoto: {
        height: 90,
        width: 250,
        backgroundColor: color.lightgray,
        borderRadius: 5
    }
})

export default Promos
