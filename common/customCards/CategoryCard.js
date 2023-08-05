import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { images } from '../../assets';

const CategoryCard = ({ categoryNme, courses, img, item }) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => { navigation.navigate('Courses', { name: item.categoryNme }) }} style={{ marginHorizontal: 12.5, paddingBottom: 20, }}>
            <View style={{
                width: 173, height: 69, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, borderRadius: 10, marginTop: 15, shadowColor: "grey",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 8,
            }}>
                <View>
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Bold', lineHeight: 14.06, color: '#3F3F3F' }}>{categoryNme}</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', lineHeight: 14.06, marginTop: 5, color: '#3F3F3F'}}>150 courses</Text>
                </View>
                <Image source={images.categoryIcon1} style={{ width: 28, height: 32 }} />
            </View>
        </TouchableOpacity>


    )
}

export default CategoryCard;

