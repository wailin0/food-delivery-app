import {StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons";

const StackHeader = ({navigation}) => {
    return (
        <View style={styles.root}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Feather name="arrow-left" size={25} color='black' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding:10
    }
})

export default StackHeader
