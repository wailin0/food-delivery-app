import {ScrollView} from "react-native";
import React from "react";
import PhotoVideoList from "./PhotoVideoList";
import ReviewList from "./ReviewList";

const Reviews = ({navigation}) => {

    return (
        <ScrollView style={{flex:1}}>
            <PhotoVideoList navigation={navigation}  />
            <ReviewList />
        </ScrollView>
    )
}

export default Reviews
