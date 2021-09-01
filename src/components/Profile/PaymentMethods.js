import {Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import StackHeader from "../StackHeader";
import {flexRowSpace} from "../../constants/styles";
import {Feather} from "@expo/vector-icons";
import {color} from "../../constants/theme";

const payments = [
    {
        icon: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png',
        cardType: 'visa',
        cardNumber: '***** **** *433',
        addedDate: 'Jun 33, 3030'
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png',
        cardType: 'mastercard',
        cardNumber: '**** **** *232',
        addedDate: 'Jun 33, 2323'
    },
]

const PaymentMethods = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StackHeader navigation={navigation}/>
            <View style={{
                flex: 1,
                paddingHorizontal: 10
            }}>
                <Text style={{fontSize: 25, marginBottom: 20, fontWeight: 'bold'}}>Payment Methods</Text>

                <ScrollView
                    style={{
                        flex: 1
                    }}
                >

                    {payments.map((payment, index) =>
                        <TouchableOpacity
                            style={{
                                ...flexRowSpace,
                                backgroundColor: 'white',
                                marginBottom: 10,
                                padding: 10,
                                borderRadius: 5,
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={{uri: payment.icon}}
                                style={{
                                    width: 50, height: 40
                                }}
                                resizeMode='contain'
                            />
                            <View
                                style={{
                                    flex: 1,
                                    marginLeft: 20
                                }}
                            >
                                <Text style={{fontWeight: 'bold'}}>
                                    {payment.cardNumber}
                                </Text>
                                <Text style={{color: 'gray'}}>
                                    {payment.addedDate}
                                </Text>
                            </View>
                            {index === 0 && <Feather name="check-circle" size={20} color='green'/>}

                        </TouchableOpacity>
                    )}
                </ScrollView>

                <View
                    style={{
                        flex: 2
                    }}>
                    <Text style={{fontSize: 25, marginBottom: 20, fontWeight: 'bold'}}>
                        Add Payment Methods
                    </Text>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        borderRadius: 5,
                        height: 50,
                        marginBottom: 10,
                        paddingHorizontal: 5,
                        ...flexRowSpace, alignItems: 'center'
                    }}
                    >
                        <Image
                            source={{uri: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png'}}
                            style={{
                                width: 50, height: 40
                            }}
                            resizeMode='contain'
                        />
                        <Text style={{flex: 1, marginLeft: 10}}>Visa</Text>
                        <Feather name="chevron-down" size={20} color='gray'/>
                    </TouchableOpacity>
                    <TextInput
                        style={{
                            height: 50,
                            borderRadius: 5,
                            backgroundColor: 'white',
                            paddingLeft: 10,
                            marginBottom: 10,
                        }}
                        placeholder='Card Number'
                    />
                    <View style={{...flexRowSpace}}>
                        <TextInput
                            style={{
                                width: '48%',
                                height: 50,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                paddingLeft: 10,
                                marginBottom: 10,
                            }}
                            placeholder='Valid thru'
                        />
                        <TextInput
                            style={{
                                width: '48%',
                                height: 50,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                paddingLeft: 10,
                                marginBottom: 10,
                            }}
                            placeholder='CVV'
                        />
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: color.primary,
                            borderRadius: 5,
                            paddingVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{color: 'white'}}>
                            Complete
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default PaymentMethods
