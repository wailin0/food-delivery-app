import {SafeAreaView, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {color} from "../constants/theme";
import SearchSuggestion from "../components/SearchSuggestion";
import SearchResult from "../components/SearchResult";

const Search = ({navigation}) => {
    const [typing, setTyping] = useState(false)


    const Header = () => {
        return (
            <View style={{
                padding: 10,
                backgroundColor: color.primary,
            }}>
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
                        autoFocus={true}
                        onFocus={() => setTyping(true)}
                        onEndEditing={() => setTyping(false)}
                        onSubmitEditing={() => setTyping(false)}
                        placeholder='Searching...'
                        style={{
                            paddingLeft: 40,
                            paddingRight: 10,
                            height: 40,
                            borderRadius: 5,
                            backgroundColor: 'white',
                            flex: 1
                        }}
                    />
                    <Text
                        onPress={() => navigation.goBack()}
                        style={{color: 'white', marginLeft: 20}}>
                        Exit
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {Header()}
            <View style={{
                flex: 1,
            }}>
                {typing && <SearchSuggestion/>}
                {!typing && <SearchResult/>}
            </View>
        </SafeAreaView>
    )
}

export default Search
