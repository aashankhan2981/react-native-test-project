import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import BlogScreenCard from '../../common/customCards/blogsCards/BlogScreenCard'
import { useNavigation } from '@react-navigation/native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reload } from '../../redux/actions'
import { images } from '../../assets'

const Blogs = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, marginBottom: 70, backgroundColor: '#fff' }}>
      <View style={{
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, backgroundColor: '#fff', borderRadius: 8,
        height: 40,
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-between'
      }}>
        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#000', lineHeight: 21.09, }}>Blogs</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen', {dataCoBlo: props.dataBlogs}) }} style={{width: '30%', backgroundColor: '#fff', alignItems: 'flex-end'}}>
          <Image source={images.search} style={{ width: 20, height: 20, }} />
        </TouchableOpacity>

      </View>

      <ScrollView  showsVerticalScrollIndicator={false} style={{flex: 1,}}>
        <View style={{ paddingTop: 15,  flex: 1, flexDirection: 'row', }}>
          
            <FlatList data={props.dataBlogs} showsVerticalScrollIndicator={false} scrollEnabled={false} renderItem={({ item, index }) => {
              return (
                <BlogScreenCard relatedField={item.relatedField} title={item.title} img={item.img} views={item.views} date={item.date} item={item}/>
              )
            }} />
  
            <FlatList data={props.dataBlogs} showsVerticalScrollIndicator={false} scrollEnabled={false} renderItem={({ item, index }) => {
              return (
                <BlogScreenCard relatedField={item.relatedField} title={item.title} img={item.img} views={item.views} date={item.date} item={item}/>
              )
            }} />

        </View>
      </ScrollView>
    </View>
  )
}

const mapStateToProps = (store) => ({
  currentUserData: store.reducer.currentUserData,
  dataCourses: store.reducer.dataCourses,
  dataBlogs: store.reducer.dataBlogs,

})

const mapDispatchProps = (dispatch) => bindActionCreators({ reload,  }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Blogs);
