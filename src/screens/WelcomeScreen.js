import { SafeAreaView, Text, View } from 'react-native';

import React from 'react';

export default function WelcomeScreen() {
    return (
        <SafeAreaView className="flex-1 flex justify-around bg-white">
            <View className="space-y-2 ">
                <Text className="text-center text-4xl font-bold text-gray-700">
                    Ongea
                </Text>
                <Text className="text-center tracking-wider text-gray-600 font-semibold">
                    The future is here, powered by AI.
                </Text>
            </View>
        </SafeAreaView>
    );
}
