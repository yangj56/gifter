import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../pages/HomePage';
import Group from './Group';
import Setting from '../pages/SettingPage';
import Inbox from '../pages/InboxPage';
import Welcome from '../pages/WelcomePage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={HomeStack} />
            <Tab.Screen name="InboxTab" component={InboxStack} />
            <Tab.Screen name="SettingTab" component={SettingStack} />
        </Tab.Navigator>
    );
};

export const WelcomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Group" component={Welcome} />
        </Stack.Navigator>
    );
};

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Group" component={Group} />
        </Stack.Navigator>
    );
};

const SettingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    );
};

const InboxStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inbox" component={Inbox} />
        </Stack.Navigator>
    );
};
