import {Text, TouchableOpacity, View} from "react-native";
import {color} from "../../constants/theme";
import Foods from "./Foods";
import Reviews from "./Reviews";
import Information from "./Information";
import React, {useState} from "react";

const TabBar = () => {
    const [tab, setTab] = useState(1)
    return (
        <>

            <View style={styles.tabBar}>
                <TouchableOpacity
                    style={{
                        ...styles.tab,
                        borderBottomColor: tab === 1 ? color.primary : 'lightgray'
                    }}
                    onPress={() => setTab(1)}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: tab !== 1 && 'gray'
                    }}>Products</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.tab,
                        borderBottomColor: tab === 2 ? color.primary : 'lightgray'
                    }}
                    onPress={() => setTab(2)}
                >
                    <Text style={{textAlign: 'center', color: tab !== 2 && 'gray'}}>Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.tab,
                        borderBottomColor: tab === 3 ? color.primary : 'lightgray'
                    }}
                    onPress={() => setTab(3)}
                >
                    <Text style={{textAlign: 'center', color: tab !== 3 && 'gray'}}>Information</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.tabsContainer}>
                {tab === 1 && <Foods/>}
                {tab === 2 && <Reviews/>}
                {tab === 3 && <Information/>}
            </View>
        </>
    )
}

const styles = {
    tab: {
        width: '33.333%',
        borderBottomWidth: 2,
        paddingBottom: 5
    },
    tabBar: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tabsContainer: {
        flex: 1,
        marginTop: 20
    }
}

export default TabBar
