import {TextInput, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import React from "react";

const SearchInput = ({navigation}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
                paddingBottom: 10
            }}
        >
            <TextInput
                placeholder='Search...'
                onFocus={() => navigation.navigate('Search')}
                style={{
                    paddingLeft: 40,
                    paddingRight: 10,
                    height: 40,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginRight: 20,
                    flex: 1
                }}
            />
            <Feather name="filter" size={24} color="white"/>
        </View>
    )
}

export default SearchInput
