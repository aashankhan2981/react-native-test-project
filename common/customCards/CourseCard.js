import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../../assets'

const CourseCard = ({ courseNme, rating, learners, img, item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('DetailScreen', {data: item})}} style={{paddingBottom: 20, marginTop: 15}}>
            <View style={{
                width: 290, height: 185, marginHorizontal: 12.5, backgroundColor: '#fff', borderRadius: 10, shadowColor: "grey",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 8,
            }}>
                <Image source={{uri: img}} style={{ width: 290, height: 133, borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                <View>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, marginLeft: 8, marginTop: 5, width: '98%' }}>{courseNme}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3, marginLeft: 8 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', lineHeight: 14.06, }}>{rating}</Text>
                            <Image source={images.star} style={{ width: 14, height: 14, marginLeft: 3 }} />
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', lineHeight: 14.06, marginLeft: 10 }}>{learners}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CourseCard;

