import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import StackHeader from "../StackHeader";
import {flexRowSpace} from "../../constants/styles";
import {Feather} from "@expo/vector-icons";

const items = [
    {
        title: 'Full Name',
        value: 'Wai Lin'
    },
    {
        title: 'Password',
        value: '******'
    },
    {
        title: 'Phone Number',
        value: '+1 2222 33 343'
    },
    {
        title: 'Email',
        value: 'wailin@gmao.com'
    },
    {
        title: 'Date of Birth',
        value: 'Oct 23, 2000'
    },
]

const ProfileDetail = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StackHeader navigation={navigation}/>

            <View style={{
                flex: 1,
                paddingHorizontal: 10
            }}>

                <View
                    style={styles.photoContainer}
                >
                    <Image
                        source={{uri: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'}}
                        style={styles.photo}
                        resizeMode='contain'
                    />
                </View>

                {items.map(item =>
                    <TouchableOpacity
                        key={item.title}
                        style={styles.items}
                    >
                        <Text
                            numberOfLines={1}
                            style={styles.title}>{item.title}</Text>
                        <Text style={styles.value}>{item.value}</Text>
                        <Feather name="chevron-right" size={15} color='gray'/>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    items: {
        ...flexRowSpace,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 15,
        borderRadius: 5
    },
    title: {
        color: 'gray',
        width: 70
    },
    value: {
        marginLeft: 30,
        flex: 1,
        fontWeight: 'bold'
    },
    photoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    photo: {
        width: 90, height: 90,
        borderRadius: 5,
        borderWidth:3,
        borderColor:'white',
        backgroundColor: 'gray'
    }
})

export default ProfileDetail
