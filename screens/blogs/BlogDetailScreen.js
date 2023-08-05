import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { useNavigation, useRoute } from '@react-navigation/native';
import { images } from '../../assets';

const BlogDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute().params.data;

    const value = 'The Macine learning basics program is designed to offer a solid foundation & work-ready skills for ML engineers. The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers.'
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginTop: 15, marginLeft: 26 }}>
                <Image source={images.arrowLeft} style={{ width: 28, height: 28, }} />
            </TouchableOpacity>
            <Image source={ {uri: route.img}} style={{ width: '100%', height: 285, borderRadius: 15, marginTop: 19 }} />
            <View style={{ marginTop: 9, paddingLeft: 25 }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '500', lineHeight: 21.09, }}>{route.title}</Text>
               
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 25, marginTop: 7}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 14.06, }}>{route.views}</Text>
                        <Image source={images.eye} style={{ width: 14, height: 14, marginLeft: 4 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 14.06, marginLeft: 22 }}>{route.date}</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 14.06, marginLeft: 22 }}>{route.relatedField}</Text>
                </View>
            </View>

            <View style={{ flex: 1, marginTop: 21, marginBottom: 15 }}>
                <View style={{ marginTop: 22, marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={images.clock} style={{ width: 32, height: 32, marginLeft: 3 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, marginLeft: 25 }}>6 Hours</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                        <Image source={images.carbonCertificate} style={{ width: 32, height: 32, marginLeft: 3 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, marginLeft: 25 }}>Completion Certificate</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                        <Image source={images.skillLevel} style={{ width: 32, height: 32, marginLeft: 3 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, marginLeft: 25 }}>Beginner</Text>
                    </View>
                </View>

                <View style={{ marginLeft: 25, marginTop: 37, }}>
                    <Text style={{ fontSize: 18, }}>What will I learn ?</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 14.06, marginTop: 5, width: 363, height: 56 }} numberOfLines={3}>{value}</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 14.06, color: '#1e0094' }}>Read More</Text>
                </View>

                <View style={{ marginTop: 17, marginLeft: 25 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, }}>Ratings and Reviews</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                        <Text style={{ fontSize: 28, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 32.81, }}>3.4</Text>

                        <View style={{ marginLeft: 18, }}>
                            <AirbnbRating showRating={false} size={20} count={5} defaultRating={1} />
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 14.06, marginLeft: 4, marginTop: 5 }}>3 review</Text>
                        </View>
                    </View>
                </View>

            </View>





        </ScrollView>
    )
}

export default BlogDetailScreen;

