import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { MainTab } from './src/components/Navigation';
import Welcome from './src/pages/WelcomePage';
import { getData } from './src/utils/AsyncStorage';

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function getAsyncStorageData() {
            const hasWelcomeSet = await getData<boolean>('SetWelcome');
            console.log(hasWelcomeSet);
            if (hasWelcomeSet) {
                setIsLoaded(hasWelcomeSet);
            } else {
                setIsLoaded(false);
            }
        }
        getAsyncStorageData();
    }, []);

    return (
        <NavigationContainer>
            {isLoaded ? <MainTab /> : <Welcome />}
        </NavigationContainer>
    );
};

export default App;
