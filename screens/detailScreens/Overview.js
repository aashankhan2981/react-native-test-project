import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '../../assets'
import { Rating, AirbnbRating } from 'react-native-ratings';

const Overview = () => {
    const value = 'The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers. The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers.'

    return (
        <View style={{ flex: 1, marginTop: 16 }}>
            <View style={{ marginLeft: 25 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={images.clock} style={{ width: 32, height: 32, marginLeft: 3 }} />
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 25 }}>6 Hours</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    <Image source={images.carbonCertificate} style={{ width: 32, height: 32, marginLeft: 3 }} />
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 25 }}>Completion Certificate</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    <Image source={images.skillLevel} style={{ width: 32, height: 32, marginLeft: 3 }} />
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 25 }}>Beginner</Text>
                </View>
            </View>

            <View style={{ marginLeft: 25, marginTop: 37, }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, }}>What will I learn ?</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 14.06, marginTop: 5, width: '85%', height: 56 }} numberOfLines={3}>{value}</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Roboto-Regular', lineHeight: 14.06, color: '#0040E3' }}>Read More</Text>
            </View>

            <View style={{ marginTop: 17, marginLeft: 25 }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, }}>Ratings and Reviews</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    <Text style={{ fontSize: 28, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 32.81, }}>3.4</Text>

                    <View style={{ marginLeft: 18, }}>
                        <AirbnbRating showRating={false} size={20} count={5} defaultRating={1} />
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 14.06, marginLeft: 4, marginTop: 5 }}>3 review</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={{ width: 300, height: 40, backgroundColor: '#1e0094', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 25, alignSelf: 'center', marginBottom: 8 }} onPress={() => { navigation.navigate('StartedCoursesScreen') }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#fff' }}>Start Learning</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Overview

const styles = StyleSheet.create({})