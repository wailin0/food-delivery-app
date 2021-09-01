import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {color, font} from "../constants/theme";
import {flexRowSpace} from "../constants/styles";
import {Feather} from "@expo/vector-icons";

const settings = [
    {
        settings: [
            {
                icon: 'credit-card',
                title: 'Payment Methods'
            },
            {
                icon: 'map-pin',
                title: 'Address'
            },
            {
                icon: 'sidebar',
                title: 'My Vouchers'
            },
        ]
    },
    {
        settings:
            [
                {
                    icon: 'bell',
                    title: 'Notification'
                },
                {
                    icon: 'globe',
                    title: 'Language'
                },
                {
                    icon: 'settings',
                    title: 'Settings'
                },
                {
                    icon: 'help-circle',
                    title: 'Support'
                }

            ]
    },
    {
        settings:
            [
                {
                    icon: 'log-out',
                    title: 'Logout'
                }
            ]
    }
]


const Profile = ({navigation}) => {

    const Header = () => {
        return (
            <View style={styles.container}>
                <Text style={{...font.title}}>
                    Profile
                </Text>
            </View>
        )
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            {Header()}

            <ScrollView
                showVerticalScrollIndicator={false}
                style={styles.root}
            >

                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile Detail')}
                    style={styles.profileContainer}
                >
                    <Image
                        source={{uri: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'}}
                        style={styles.photo}
                    />
                    <View style={{marginRight: 'auto', marginLeft: 10}}>
                        <Text style={styles.name}>Wai Lin</Text>
                        <Text style={styles.phone}>+1 34343 433</Text>
                    </View>
                    <Feather name="chevron-right" size={20} color={color.gray}/>
                </TouchableOpacity>


                <View style={{paddingHorizontal: 10}}>
                    {settings.map((value, index) =>
                        <View
                            key={index}
                            style={styles.settingContainer}
                        >
                            {value.settings.map(setting =>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(setting.title)}
                                    key={setting.title}
                                    style={styles.settingItem}
                                >
                                    <Feather name={setting.icon} size={20} color={color.gray}/>
                                    <Text style={styles.title}>{setting.title}</Text>
                                    <Feather name="chevron-right" size={20} color={color.gray}/>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white'
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginTop:10,
        marginBottom: 20,
        borderRadius: 10
    },
    root: {
        flex: 1,
        paddingHorizontal: 10
    },
    photo: {
        width: 70, height: 70,
        borderRadius: 5,
        backgroundColor: 'gray'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        marginRight: 'auto',
        marginLeft: 20
    },
    phone: {
        color: 'gray'
    },
    settingContainer: {
        backgroundColor: 'white',
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 0
    },
    settingItem: {
        ...flexRowSpace,
        paddingVertical: 10,
        alignItems: 'center'
    }
})

export default Profile
