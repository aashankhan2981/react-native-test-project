import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '../../assets';

const StartedScreenCard = ({ time, }) => {
    const value = 'The Macine learning basics program is designed to offer a soli foundation & work-ready skills for ML engineers';
    return (
        <View style={{
            width: '90%', height: 210, backgroundColor: '#fff', justifyContent: 'center', borderRadius: 17, shadowColor: "grey",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 8,
            marginBottom: 12,
            alignSelf: 'center'
        }}>
            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#000', lineHeight: 21.09, marginHorizontal: 15, marginTop: 21 }}>Macine Learning</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 11, }}>
                <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: '#000', lineHeight: 14.06, width: 219, height: 42 }} numberOfLines={2}>{value}</Text>
                <View style={{ width: 62, height: 62, borderRadius: 62 / 2, borderColor: '#00C108', borderWidth: 8, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#000', lineHeight: 21.09, }} >80%</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: 12 }}>
                <Image source={images.clock} style={{ width: 18, height: 18 }} />
                <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: '#000', lineHeight: 14.06, marginLeft: 10 }}>5 hours left</Text>
            </View>

            <View style={{ width: '100%', height: 1, backgroundColor: '#000000', marginTop: 26 }} />

            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, marginHorizontal: 15, color: '#0113B9', alignSelf: 'center', marginTop: 9, marginBottom: 8 }}>Start Learning</Text>
        </View>
    )
}

export default StartedScreenCard;

