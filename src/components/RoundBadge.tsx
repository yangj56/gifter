import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

interface Props {
    title: string;
    color?: string;
    onPress?: () => {};
    backgroundImage?: string;
}

export default function RoundBadge({
    title,
    color = 'red',
    onPress,
    backgroundImage,
}: Props) {
    return (
        <View
            style={{
                alignItems: 'center',
            }}>
            <TouchableHighlight onPress={onPress}>
                <View
                    style={{
                        backgroundColor: color,
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                        margin: 10,
                    }}
                />
            </TouchableHighlight>
            <Text>{title}</Text>
        </View>
    );
}
