import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {reviews} from "../../dummy";
import React from "react";
import {color} from "../../constants/theme";
import {flexRow} from "../../constants/styles";
import {Entypo} from '@expo/vector-icons'


const ReviewList = () => {

    return (
        <View style={styles.root}>
            {reviews.map(review =>
                <View key={review.id} style={styles.itemContainer}>
                    <Image
                        source={{uri: review.user.photoURL}}
                        style={styles.photo}
                    />
                    <View style={{flex: 1, marginLeft: 5}}>
                        <Text>{review.user.name}</Text>
                        <View style={{...flexRow}}>
                            {[1,2,3,4,5].map((key) =>
                                <Entypo key={key} name='star' size={15} color='gold' />
                            )}
                        </View>
                        <Text style={{marginVertical: 5}}>{review.text}</Text>
                        <View style={styles.userReviewPhotoContainer}>
                            {review.photos.map(photo =>
                                <TouchableOpacity
                                    key={photo.id}
                                    style={{marginRight: 5, marginBottom: 5}}>
                                    <Image
                                        source={{uri: photo}}
                                        style={styles.userReviewPhoto}

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

const styles = StyleSheet.create({
    root: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    photo: {
        width: 50, height: 50,
        borderRadius: 5,
        backgroundColor: color.lightgray
    },
    userReviewPhotoContainer: {
        flexDirection: 'row',
        flex:1,
        flexWrap: 'wrap'
    },
    userReviewPhoto: {
        width: 80, height: 80,
        borderRadius: 5,
        backgroundColor: color.lightgray
    }
})

export default ReviewList
