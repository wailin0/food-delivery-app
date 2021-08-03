import {StyleSheet, Text, View} from "react-native";
import {color} from "../../constants/theme";
import {Feather} from "@expo/vector-icons";
import SearchInput from "../SearchInput";
import React from "react";
import {flexRow} from "../../constants/styles";

const Header = ({navigation}) => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Delivering to</Text>
            <View style={styles.flex}>
                <Feather name="map-pin" size={15} color="white"/>
                <Text style={styles.address}>
                    534A Eight Avenue, New York US
                </Text>
                <Feather name="chevron-down" size={15} color="white"/>
            </View>
            <SearchInput navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: color.primary
    },
    address: {
        color: 'white',
        marginHorizontal: 5
    },
    text: {
        color: color.lightgray
    },
    flex: {
        ...flexRow,
        marginTop: 10
    }
})

export default Header
