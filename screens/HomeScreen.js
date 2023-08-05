import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CategoryCard from '../common/customCards/CategoryCard';
import CourseCard from '../common/customCards/CourseCard';
import BlogCard from '../common/customCards/blogsCards/BlogCard';
import { dataCategory } from '../json files/dataCategory';
import { PageSlider } from '@pietile-native-kit/page-slider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reload, fetchCurrentUserData } from '../redux/actions';
import Spinner from 'react-native-loading-spinner-overlay';
import { images } from '../assets';

const HomeScreen = (props) => {
    const navigation = useNavigation();
    const [selectedPage, setSelectedPage] = useState(0);
    const pageChange = () => { }


    return (

        // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //     <Text style={{ fontSize: 18, fontFamily: 'VinaSans-Regular', fontWeight: '500' }}> NO WAY</Text>
        // </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: 70, backgroundColor: '#fff', }}>

            <View style={{
                flexDirection: 'row', alignItems: 'center', paddingHorizontal: 26, backgroundColor: '#fff', borderRadius: 8,
                height: 40,
                width: '100%',
                marginTop: 15,
                justifyContent: 'space-between'
            }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F' }}>{props?.currentUserData?.userName}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Search') }} style={{ width: '30%', backgroundColor: '#fff', alignItems: 'flex-end' }}>
                    <Image source={images.search} style={{ width: 20, height: 20, }} />
                </TouchableOpacity>
            </View>



            <PageSlider
                selectedPage={selectedPage}
                onSelectedPageChange={setSelectedPage}
                onCurrentPageChange={pageChange}
            >
                <ImageBackground style={[{
                    width: '100%', height: 203, borderRadius: 10, marginTop: 10, alignSelf: 'center', justifyContent: 'flex-end', alignItems: 'center'
                }, { backgroundColor: '#fff' }]} source={images.banner} resizeMode='stretch' >

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
                        <View style={{ backgroundColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2 }} />
                        <View style={{ borderColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2, marginLeft: 4, borderWidth: 1 }} />
                        <View style={{ borderColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2, marginLeft: 4, borderWidth: 1 }} />
                    </View>
                </ImageBackground>

                <ImageBackground style={[{
                    width: '100%', height: 203, borderRadius: 10, marginTop: 10, alignSelf: 'center', justifyContent: 'flex-end', alignItems: 'center'
                }, { backgroundColor: '#fff' }]} source={images.banner} resizeMode='stretch' >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>

                        <View style={{ borderColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2, borderWidth: 1 }} />
                        <View style={{ backgroundColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2, marginLeft: 4, }} />
                        <View style={{ borderColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2, marginLeft: 4, borderWidth: 1 }} />
                    </View>
                </ImageBackground>

                <ImageBackground style={[{
                    width: '100%', height: 203, borderRadius: 10, marginTop: 10, alignSelf: 'center', justifyContent: 'flex-end', alignItems: 'center'
                }, { backgroundColor: '#fff' }]} source={images.banner} resizeMode='stretch' >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>

                        <View style={{ borderColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2, borderWidth: 1 }} />
                        <View style={{ borderColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2, marginLeft: 4, borderWidth: 1 }} />
                        <View style={{ backgroundColor: '#fff', width: 6, height: 6, borderRadius: 6 / 2, marginLeft: 4, }} />
                    </View>
                </ImageBackground>
            </PageSlider>




            <View style={{ marginTop: 20, paddingHorizontal: 12.5 }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, marginLeft: 12.5, color: '#3F3F3F' }}>Categories</Text>
                <FlatList horizontal data={dataCategory} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
                    return (

                        <CategoryCard categoryNme={item.categoryNme} item={item} />
                    )
                }} />
            </View>

            <View style={{ paddingHorizontal: 12.5, }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, marginLeft: 12.5, color: '#3F3F3F' }}>Top Courses</Text>
                <FlatList horizontal data={props.dataCourses} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
                    return (
                        <CourseCard courseNme={item.name} rating={item.rating} learners={item.learners} img={item.img} item={item} />

                    )
                }} />
            </View>

            <View style={{ paddingHorizontal: 12.5 }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, marginLeft: 12.5, color: '#3F3F3F' }}>Popular Blogs</Text>
                <FlatList horizontal data={props.dataBlogs} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
                    console.log('item: ', item);
                    return (
                        <BlogCard img={item.img} authorNme={item.authorNme} title={item.title} body={item.body} item={item} />

                    )
                }} />
            </View>

            {
                props.dataCourses.length == 0 ? <Spinner
                    visible={true}
                    textContent={'Loading...'}
                    textStyle={{ color: '#1e0094' }}
                />

                    :
                    null
            }

        </ScrollView>

    )
}

const mapStateToProps = (store) => ({
    currentUserData: store.reducer.currentUserData,
    dataCourses: store.reducer.dataCourses,
    dataBlogs: store.reducer.dataBlogs,

})

const mapDispatchProps = (dispatch) => bindActionCreators({ reload, fetchCurrentUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(HomeScreen);

