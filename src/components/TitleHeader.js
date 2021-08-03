import {Text, TouchableOpacity, View} from "react-native";
import {color} from "../constants/theme";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {flexRowSpace} from "../constants/styles";

const TitleHeader = ({navigation, title, goTo}) => {
    return (
        <View style={{...flexRowSpace,paddingHorizontal:10}}>
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate(goTo)}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: color.primary}}>View all</Text>
                <Feather name="chevrons-right" size={15} color={color.primary}/>
            </TouchableOpacity>
        </View>

    )
}

export default TitleHeader
