import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '../../assets';

const LectureCard = () => {
    return (

        <View style={{
            width: '90%', height: 70, backgroundColor: '#fff', paddingVertical: 8, borderRadius: 10, marginBottom: 15, shadowColor: "grey",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 8,
            alignSelf: 'center'
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, alignItems: 'center', marginTop: 2 }}>
                <Text style={{ fontSize: 12, fontFamily: 'Roboto-Medium', color: '#3F3F3F', lineHeight: 14.06, }}>Lesson 1</Text>
                <Image source={images.dropDown} style={{ width: 24, height: 24, }} />
            </View>
            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 16, marginTop: 8, marginBottom: 2 }}>Introduction</Text>
        </View>

    )
}

export default LectureCard;

