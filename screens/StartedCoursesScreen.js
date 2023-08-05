import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import StartedScreenCard from '../common/customCards/StartedScreenCard'
import { dataCategory } from '../json files/dataCategory'
import { images } from '../assets';

const StartedCoursesScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 26, backgroundColor: '#fff', borderRadius: 8,
        height: 40,
        width: '100%',
        marginTop: 15,
        justifyContent: 'space-between'
      }}>
        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09,}}>My Courses</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen') }}>
          <Image source={images.search} style={{ width: 20, height: 20, }} />
        </TouchableOpacity>

      </View>

      <View style={{ flex: 1, paddingTop: 10, paddingBottom: 8}}>
        <FlatList data={dataCategory} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => {
          return (
            <StartedScreenCard />
          )
        }} />
      </View>
    </View>
  )
}

export default StartedCoursesScreen;
