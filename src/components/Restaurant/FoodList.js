import {StyleSheet, Text, View} from "react-native";
import ProductItem from "../ProductItem";
import {products} from "../../dummy";
import React from "react";
import {flexRow} from "../../constants/styles";


const foods = [
    {
        id: 1,
        category: 'Juice',
        products: [...products]
    },
    {
        id: 2,
        category: 'Coffee',
        products: [...products]
    },
]

const FoodList = () => {
    return (
        <View style={styles.root}>
            {foods.map(food =>
                <View key={food.id} style={styles.item}>
                    <View style={{...flexRow,marginBottom:10}}>
                        <Text style={{fontWeight: 'bold'}}>{food.category}</Text>
                        <Text style={{color:'gray',marginLeft:10}}>{food.products.length} items</Text>
                    </View>
                    {food.products.map(product =>
                        <ProductItem product={product}/>
                    )}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
        root: {
            marginTop: 10
        },
        item: {
            padding: 10,
            backgroundColor: 'white',
            marginBottom: 10
        }
    }
)

export default FoodList

