import React from 'react';
import { Text, View } from 'react-native';
import { storeData } from '../utils/AsyncStorage';

export default function Welcome() {
    storeData('SetWelcome', true);
    return (
        <View>
            <Text>Welcome Page</Text>
        </View>
    );
}
