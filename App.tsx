import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text>Hello world</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

export default App;
