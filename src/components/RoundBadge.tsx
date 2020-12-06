import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';

interface Props {
    title: string;
    color?: string;
    onPress?: () => void;
    imageUrl?: string;
}

export default function RoundBadge({
    title,
    color = 'red',
    onPress,
    imageUrl,
}: Props) {
    return (
        <View
            style={{
                alignItems: 'center',
            }}>
            <TouchableHighlight onPress={onPress}>
                <Image
                    style={{
                        backgroundColor: color,
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                        margin: 10,
                    }}
                    source={{
                        uri: imageUrl,
                    }}
                />
            </TouchableHighlight>
            <Text>{title}</Text>
        </View>
    );
}
