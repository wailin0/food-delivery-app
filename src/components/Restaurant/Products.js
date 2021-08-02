import {Text, View} from "react-native";
import React from "react";
import TitleHeader from "../TitleHeader";
import ProductHorizontalList from "../ProductHorizontalList";
import {products} from "../../dummy";
import ProductItem from "../ProductItem";


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

const Products = ({navigation}) => {

    return (
        <View>
            <TitleHeader title='Popular Items' goTo='' navigation={navigation}/>

            <ProductHorizontalList products={products} paddingLeft={10}/>

            <View style={{marginTop: 10}}>
                {foods.map(food =>
                    <View style={{padding: 10, backgroundColor: 'white', marginBottom: 10}}>
                        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                            <Text style={{fontWeight: 'bold'}}>{food.category}</Text>
                            <Text style={{color:'gray',marginLeft:10}}>{food.products.length} items</Text>
                        </View>
                        {food.products.map(product =>
                            <ProductItem product={product}/>
                        )}
                    </View>
                )}
            </View>

        </View>
    )
}

export default Products
