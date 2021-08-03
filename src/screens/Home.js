import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Promos from "../components/Home/Promos";
import Categories from "../components/Home/Categories";
import PopularOrders from "../components/Home/PopularOrders";
import Header from "../components/Home/Header";
import PopularRestaurants from "../components/Home/PopularRestaurants";
import NearbyRestaurants from "../components/Home/NearbyRestaurants";

const Home = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header/>
            <ScrollView style={{flex: 1}}>
                <Promos/>
                <Categories navigation={navigation}/>
                <PopularOrders navigation={navigation}/>
                <PopularRestaurants navigation={navigation}/>
                <NearbyRestaurants navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
