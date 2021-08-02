import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import TitleHeader from "../TitleHeader";
import {products} from "../../dummy";

const reviews = [
    {
        id: 1,
        rating: 4,
        user: {
            name: 'Pauline MacGur',
            photoURL: 'http'
        },
        text: 'Mieke aeaes ss hish siht',
        photos: [],
        createdAt: '3 hr ago'
    },
    {
        id: 2,
        rating: 4,
        user: {
            name: 'Chjerkes Moarris',
            photoURL: 'http'
        },
        text: 'Mieke aeaes ss hish siht',
        photos: ['http', 'http'],
        createdAt: '2 hr ago'
    }
]

const Reviews = ({navigation}) => {

    const PhotoVideoList = () => {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity>
                    <Image
                        style={{
                            width: 70, height: 70,
                            borderRadius: 5,
                            backgroundColor: 'red',
                            marginRight: 5
                        }}
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

    const ReviewList = () => {

        return (
            <View style={{marginTop: 10, paddingHorizontal: 10}}>
                {reviews.map(review =>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 10,
                        justifyContent: 'space-between'
                    }}>
                        <Image
                            souce={{uri: review.user.photoURL}}
                            style={{
                                width: 40, height: 40,
                                borderRadius: 5,
                                backgroundColor: 'red'
                            }}
                        />
                        <View style={{flex: 1, marginLeft: 5}}>
                            <Text>{review.user.name}</Text>
                            <Text>xxxxx</Text>
                            <Text style={{marginVertical: 5}}>{review.text}</Text>
                            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                {review.photos.map(photo =>
                                    <TouchableOpacity style={{marginRight:5,marginBottom:5}}>
                                        <Image
                                            source={{uri: photo}}
                                            style={{
                                                width: 70, height: 70,
                                                borderRadius: 5,
                                                backgroundColor: 'red'
                                            }}

                                        />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                        <Text style={{color: 'gray'}}>{review.createdAt}</Text>
                    </View>
                )}
            </View>
        )
    }


    return (
        <View>
            {PhotoVideoList()}
            {ReviewList()}
        </View>
    )
}

export default Reviews
