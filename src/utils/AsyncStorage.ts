import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key: string, value: any) {
    try {
        const strValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, strValue);
    } catch (e) {
        console.error(`Failed to store data key: ${key}, value: ${value}`);
    }
}

export async function getData<T>(key: string): Promise<T | undefined> {
    try {
        const rawValue = await AsyncStorage.getItem(key);
        if (rawValue) {
            return JSON.parse(rawValue) as T;
        }
    } catch (e) {
        console.error(`Failed to get data key: ${key}`);
    }
}
