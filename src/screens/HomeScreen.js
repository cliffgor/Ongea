import { Image, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import Features from '../components/features';

export default function HomeScreen() {
    const [messages, setMessages] = useState([]);
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
                {messages.length > 0 ? <View /> : <Features />}
            </SafeAreaView>
        </View>
    );
}
