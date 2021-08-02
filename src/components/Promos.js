import {FlatList, Image, TouchableOpacity, View} from "react-native";
import React from "react";


const promos = [
    {
        id: 1,
        photoURL: 'htt'
    },
    {
        id: 2,
        photoURL: ''
    },
    {
        id: 3,
        photoURL: 'htt'
    }
]

const Promos = () => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={{
                marginRight: 10
            }}>
                <Image
                    souce={{uri: item.photoURL}}
                    style={{
                        height: 90,
                        width: 250,
                        backgroundColor: 'red',
                        borderRadius: 5
                    }}
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

export default Promos
