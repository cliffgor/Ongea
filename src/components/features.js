import { Text, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import React from 'react';

export default function features() {
    return (
        <View style={{ height: hp(60) }} className="space-y-4">
            <Text>features</Text>
        </View>
    );
}
