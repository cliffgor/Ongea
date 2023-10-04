import { Image, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import React from 'react';

export default function features() {
    return (
        <View style={{ height: hp(60) }} className="space-y-4">
            <Text
                style={{ fontSize: wp(6.5) }}
                className="font-semibold text-gray-700">
                Features
            </Text>
            {/* Feature one */}
            <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image
                        source={require('../../assets/images/chatgpt.png')}
                        style={{ height: hp(4), width: hp(4) }}
                    />
                    <Text
                        style={{ fontSize: wp(4.8) }}
                        className="font-semibold text-gray-700">
                        Chat GPT
                    </Text>
                </View>
                <Text
                    style={{ fontSize: wp(3.8) }}
                    className="text-gray-700 font-medium">
                    ChatGPT, which stands for Chat Generative Pre-trained
                    Transformer, is a large language model-based chatbot
                    developed by OpenAI.
                </Text>
            </View>
            {/* Feature two */}
            <View className="bg-purple-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image
                        source={require('../../assets/images/chatgpt.png')}
                        style={{ height: hp(4), width: hp(4) }}
                    />
                    <Text
                        style={{ fontSize: wp(4.8) }}
                        className="font-semibold text-gray-700">
                        DALL-E
                    </Text>
                </View>
                <Text
                    style={{ fontSize: wp(3.8) }}
                    className="text-gray-700 font-medium">
                    ChatGPT, which stands for Chat Generative Pre-trained
                    Transformer, is a large language model-based chatbot
                    developed by OpenAI.
                </Text>
            </View>
            {/* Feature three */}
            <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image
                        source={require('../../assets/images/chatgpt.png')}
                        style={{ height: hp(4), width: hp(4) }}
                    />
                    <Text
                        style={{ fontSize: wp(4.8) }}
                        className="font-semibold text-gray-700">
                        Smart AI
                    </Text>
                </View>
                <Text
                    style={{ fontSize: wp(3.8) }}
                    className="text-gray-700 font-medium">
                    ChatGPT, which stands for Chat Generative Pre-trained
                    Transformer, is a large language model-based chatbot
                    developed by OpenAI.
                </Text>
            </View>
        </View>
    );
}
