import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import RoundBadge from '../components/RoundBadge';
import SearchBar from '../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import store, { AppDispatch } from '../store';
import { addFavourite } from '../reducers/favourite';
import { RootState } from '../store/rootReducer';
import { cuisineArray } from '../constants/cuisines';
import { FlatGrid } from 'react-native-super-grid';
import { recommendedList } from '../dummy/recommended';
import { RecommendedSection } from '../domains';

function Home() {
    const dispatch: AppDispatch = useDispatch();
    const setFavourite = (country: string) => {
        dispatch(addFavourite(country));
    };

    const navigateToCusines = (country: string) => {
        console.log(country);
    };

    console.log('Initial state: ', store.getState());
    const favourite = useSelector((state: RootState) => state.favourite);
    console.log(favourite);

    const roundBadgeArray = cuisineArray.map((item) => {
        return (
            <RoundBadge
                title={item.title}
                onPress={() => navigateToCusines(item.id)}
                imageUrl={item.image}
                key={item.id}
            />
        );
    });

    const renderSquareBox = (item: RecommendedSection) => {
        return (
            <View
                style={{
                    height: 100,
                    width: '100%',
                    borderRadius: 50,
                }}>
                <Image
                    style={{ flex: 1 }}
                    source={{
                        uri: item.image,
                    }}
                />
            </View>
        );
    };

    const renderCuisinesBadge = () => {
        return (
            <>
                <Text>Cuisines</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {roundBadgeArray}
                </ScrollView>
                <Text>Recommended</Text>
            </>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <SearchBar />
            <FlatGrid
                style={{ backgroundColor: 'white' }}
                itemDimension={150}
                spacing={20}
                data={recommendedList}
                renderItem={({ item }) => renderSquareBox(item)}
                ListHeaderComponent={renderCuisinesBadge()}
            />
            <Button onPress={() => {}} title="Add Group" />
        </View>
    );
}

export default Home;
