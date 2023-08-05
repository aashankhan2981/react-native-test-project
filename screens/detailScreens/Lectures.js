import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { dataCategory } from '../../json files/dataCategory'
import LectureCard from '../../common/customCards/LectureCard'

const Lectures = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ paddingTop: 25 }}>
                <FlatList data={dataCategory} showsHorizontalScrollIndicator={false} scrollEnabled={false}  renderItem={({ item, index }) => {
                    return (
                        <LectureCard />
                    )
                }} />
            </View>
        </View>
    )
}

export default Lectures;
