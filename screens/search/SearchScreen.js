import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import SearchScCard from '../../common/customCards/SearchScCard';
import { images } from '../../assets';

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState(route1);
    const [searchTxt, setSearchTxt] = useState();
    const route = useRoute()?.params?.data;
    const route1 = useRoute()?.params?.dataCoBlo;
    const navigation = useNavigation();

    useEffect(() => {
        console.log('route: ', route);
        console.log('route1: ', route1);

        searchFilter(route);
        setSearchTxt(route)
    }, []);


    useEffect(() => {
        if (searchTxt) {
            searchFilter(searchTxt);
        }
        else {
            setSearchValue(route1)
        }
    }, [searchTxt]);

    const searchFilter = (text) => {
        console.log('text ', text);
        if (text) {
            const newData = route1.filter((item) => {
                console.log('text ', text);
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()

                const textData = text.toUpperCase();
                console.log('Check1');
                return itemData.indexOf(textData) > -1;


            })
            console.log('Check2');
            setSearchValue(newData);
        } else {
            console.log('Check3');
            setSearchValue(route1);
        }
        console.log('Check4');
    }

    // const resetSearch = () => {
    //     setSearchTxt('');
    //     setSearchValue(route1);
    // }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                <View style={{
                    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, backgroundColor: '#F3F3F3', borderRadius: 4,
                    height: 50,
                    width: '90%',
                    marginTop: 15,
                    marginLeft: 20
                }}>

                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image source={images.arrowLeft} style={{ width: 25, height: 25, }} />
                    </TouchableOpacity>

                    <TextInput
                        style={{
                            color: '#3F3F3F',
                            width: '80%',
                            marginLeft: 20,

                        }}
                        value={searchTxt}
                        placeholder="Search"
                        onChangeText={(search) => {
                            setSearchTxt(search)
                        }} />

                    <TouchableOpacity onPress={() => { /*resetSearch()*/ }}>
                        <Image source={images.search} style={{ width: 18, height: 18, }} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList data={searchValue} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => {
                    console.log('itemSearchScreen: ', item);
                    return (

                        <SearchScCard img={item.img} rating={item.type == 'course' ? item.rating : item.views} learners={item.type == 'course' ? item.learners : item.relatedField} title={item.title} type={item.type} item={item} />

                    )
                }} />
            </View>

        </View>
    )
}

export default SearchScreen;

