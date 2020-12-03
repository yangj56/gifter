import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchBar() {
    return (
        <>
            <SafeAreaView>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <TextInput
                        placeholder={'Search the app'}
                        style={{
                            backgroundColor: 'red',
                            marginHorizontal: 20,
                            width: '60%',
                            borderRadius: 10,
                            padding: 5,
                        }}
                    />
                    <Icon
                        name="favorite"
                        size={30}
                        style={{ color: 'black' }}
                    />
                    <Icon name="search" size={30} />
                </View>
            </SafeAreaView>
        </>
    );
}
