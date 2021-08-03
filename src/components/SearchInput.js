import {StyleSheet, TextInput, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {color} from "../constants/theme";
import {flexRowSpace} from "../constants/styles";

const SearchInput = ({navigation}) => {
    return (
        <View
            style={styles.root}
        >
            <Feather name="search" size={20} color={color.gray}
                     style={styles.searchIcon}
            />
            <TextInput
                placeholder='Search...'
                onFocus={() => navigation.navigate('Search')}
                style={styles.searchInput}
            />

            <Feather name="filter" size={20} color="white"/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        ...flexRowSpace,
        marginTop: 20,
        paddingBottom: 10
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 10,
        zIndex: 2
    },
    searchInput: {
        paddingLeft: 40,
        paddingRight: 10,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'white',
        marginRight: 20,
        flex: 1
    }

})

export default SearchInput
