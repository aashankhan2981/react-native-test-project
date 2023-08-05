import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../../assets';

const SearchScCard = ({ title, img, learners, rating, type, item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => { type == 'course' ? navigation.navigate('DetailScreen', { data: item }) : navigation.navigate('BlogDetailScreen', { data: item }) }}>
            <View style={{
                width: '100%', height: 100, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, alignItems: 'center', marginVertical: 17, marginBottom: 12
            }}>
                <View>
                    <Text style={{ fontSize: 18, marginLeft: 8, width: 200, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F' }}>{title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8, marginTop: 7 }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', lineHeight: 14.06, color: '#3F3F3F'}}>{rating}</Text>
                        {
                            type == 'course' ?
                                <Image source={images.star} style={{ width: 14, height: 14, marginLeft: 4, }} />
                                :
                                <Image source={images.eye} style={{ width: 14, height: 14, marginLeft: 4, }} />
                        }


                    </View>


                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', lineHeight: 14.06, marginTop: 7, marginLeft: 8, color: '#3F3F3F' }}>{learners}</Text>
                </View>
                <Image source={{ uri: img }} style={{ width: 80, height: 80, borderRadius: 10 }} />
            </View>
        </TouchableOpacity>
    )
}

export default SearchScCard;
