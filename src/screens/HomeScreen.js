import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Features from '../components/features';
import dummyMessage from '../constants/index';

export default function HomeScreen() {
    const [messages, setMessages] = useState([dummyMessage]);
    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1 flex mx-5">
                {/* AI BOT ICON */}
                <View className="flex-row justify-center">
                    <Image
                        source={require('../../assets/images/rh.png')}
                        style={{ height: hp(15), width: hp(15) }}
                    />
                </View>

                {/* Features || messages */}
                {messages.length > 0 ? (
                    <View className="space-y-2 flex-1">
                        <Text
                            style={{ fontSize: wp(5) }}
                            className="text-gray-700 font-semibold ml-1">
                            Assistant
                        </Text>
                        <View
                            style={{ height: hp(58) }}
                            className="bg-neutral-200 rounded-3xl p-4">
                            <ScrollView
                                bounces={false}
                                className="space-y-4"
                                showsVerticalScrollIndicator={false}>
                                {messages.map((message, index) => {
                                    return (
                                        <View key={index}>
                                            {message && message.content && (
                                                <Text>{message.content}</Text>
                                            )}
                                        </View>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    </View>
                ) : (
                    <Features />
                )}
            </SafeAreaView>
        </View>
    );
}
