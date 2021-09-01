import {FlatList, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import TitleHeader from "../TitleHeader";
import {products} from "../../dummy";
import React from "react";
import {color} from "../../constants/theme";

const PhotoVideoList = ({navigation}) => {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity>
                <Image
                    source={{uri: item.photoURL}}
                    style={styles.itemPhoto}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <TitleHeader title='Photos & Videos' goTo='' navigation={navigation}/>
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


const styles = StyleSheet.create({
    itemPhoto: {
        width: 70, height: 70,
        borderRadius: 5,
        backgroundColor: color.lightgray,
        marginRight: 5
    }
})

export default PhotoVideoList
