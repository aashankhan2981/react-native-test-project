import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../../../assets';

const BlogScreenCard = ({ relatedField, title, views, date, img, item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => { navigation.navigate('BlogDetailScreen', { data: item }) }} >
            <View style={{
                width: 165, height: 200, backgroundColor: '#fff', marginBottom: 15, borderRadius: 10, shadowColor: "grey",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 8,
                paddingRight: 5,
                marginLeft: 5,
                alignSelf: 'center'
            }}>
                <Image source={{ uri: img }} style={{ width: 165, height: 118, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                <Text style={{ fontSize: 14, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 14.06, marginLeft: 9, marginTop: 8 }}>{relatedField}</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', color: '#3F3F3F', lineHeight: 14.06, marginLeft: 9, marginTop: 5 }}>{title}</Text>

                <View style={{ flexDirection: 'row', marginHorizontal: 9, marginTop: 8, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={images.eye} style={{ width: 16, height: 16, }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 11.72, marginLeft: 6 }}>{views}</Text>

                    </View>

                    <View>
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 11.72, }}>{date}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BlogScreenCard;

