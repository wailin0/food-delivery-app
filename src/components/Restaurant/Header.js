import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import React from "react";

const Header = ({navigation}) => {
    return (
        <View style={styles.root}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Feather name='arrow-left' size={20} color='white'/>
            </TouchableOpacity>
            <Feather name="more-horizontal" size={24} color="white"/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default Header
