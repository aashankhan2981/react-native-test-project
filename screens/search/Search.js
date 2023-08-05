import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { popularTags } from '../../json files/popularTags'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reload } from '../../redux/actions';
import { images } from '../../assets';

const Search = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{
                flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, backgroundColor: '#F3F3F3', borderRadius: 4,
                height: 50,
                width: '90%',
                marginTop: 10,
                justifyContent: 'space-between', alignSelf: 'center',
            }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{backgroundColor: '#F3F3F3', width: '20%'}}>
                    <Image source={images.arrowLeft} style={{ width: 28, height: 28, }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen', {dataCoBlo: props.dataCourses}) }} style={{width: '70%', backgroundColor: '#F3F3F3', alignItems: 'flex-end'}}>
                    <Image source={images.search} style={{ width: 20, height: 20, }} />
                </TouchableOpacity>

            </View>

            <View style={{ paddingHorizontal: 25, marginTop: 18 }}>
                <Text style={{ fontSize: 18, lineHeight: 21.09, fontFamily: 'Roboto-Medium', color: '#3F3F3F' }}>Popular Tags</Text>
                <View style={{ marginTop: 16, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen', { data: popularTags.Cyber_Security, dataCoBlo: props.dataCourses}) }}>
                            <View style={{ width: 154, height: 34, borderRadius: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D2E4FF', }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F'}}>{popularTags.Cyber_Security}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen', { data: popularTags.Data_Science, dataCoBlo: props.dataCourses }) }}>
                            <View style={{ width: 154, height: 34, borderRadius: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D2E4FF', marginLeft: 11 }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F'}}>{popularTags.Data_Science}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen', { data: popularTags.Java, dataCoBlo: props.dataCourses }) }}>
                            <View style={{ width: 98, height: 34, borderRadius: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D2E4FF' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F'}}>{popularTags.Java}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen', { data: popularTags.React_Js, dataCoBlo: props.dataCourses }) }}>
                            <View style={{ width: 98, height: 34, borderRadius: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D2E4FF', marginLeft: 11 }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F'}}>{popularTags.React_Js}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen', { data: popularTags.DevOps, dataCoBlo: props.dataCourses }) }}>
                            <View style={{ width: 98, height: 34, borderRadius: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D2E4FF', marginLeft: 11 }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F'}}>{popularTags.DevOps}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen', { data: popularTags.Machine_Learning, dataCoBlo: props.dataCourses }) }}>
                            <View style={{ width: 173, height: 34, borderRadius: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D2E4FF' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F'}}>{popularTags.Machine_Learning}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View>
    )
}
const mapStateToProps = (store) => ({
    currentUserData: store.reducer.currentUserData,
    dataCourses: store.reducer.dataCourses,
    dataBlogs: store.reducer.dataBlogs,

})

const mapDispatchProps = (dispatch) => bindActionCreators({ reload,  }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Search);

