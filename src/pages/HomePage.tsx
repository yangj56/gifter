import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import RoundBadge from '../components/RoundBadge';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <SearchBar />
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View>
                    <Text>Cuisines</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View>
                            <RoundBadge title={'Asia'} />
                            <RoundBadge title={'French'} />
                        </View>
                        <View>
                            <RoundBadge title={'Asia'} />
                            <RoundBadge title={'French'} />
                        </View>
                        <View>
                            <RoundBadge title={'Asia'} />
                            <RoundBadge title={'French'} />
                        </View>
                        <View>
                            <RoundBadge title={'Asia'} />
                            <RoundBadge title={'French'} />
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <Text>Recommended for you</Text>
                </View>
            </ScrollView>

            <Button onPress={() => {}} title="Add Group" />
        </View>
    );
}
