import {ScrollView} from "react-native";
import React from "react";
import TitleHeader from "../TitleHeader";
import ProductHorizontalList from "../ProductHorizontalList";
import {products} from "../../dummy";
import FoodList from "./FoodList";


const Foods = ({navigation}) => {

    return (
        <ScrollView style={{flex:1}}>
            <TitleHeader title='Popular Items' goTo='' navigation={navigation}/>
            <ProductHorizontalList products={products} paddingLeft={10}/>
            <FoodList />
        </ScrollView>
    )
}

export default Foods
