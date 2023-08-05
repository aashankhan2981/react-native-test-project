import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reload } from '../redux/actions';
import { images } from '../assets';

const MyCourse = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <View style={{
                flexDirection: 'row', alignItems: 'center', paddingHorizontal: 26, backgroundColor: '#fff', borderRadius: 8,
                height: 40,
                width: '100%',
                marginTop: 10,
                justifyContent: 'space-between'
            }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#3F3F3F'}}>My Courses</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SearchScreen') }}>
                    <Image source={images.search} style={{ width: 20, height: 20, }} />
                </TouchableOpacity>

            </View>

            <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={images.NoDataCuate} style={{ width: 338, height: 225, }} />
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', lineHeight: 21.09, marginTop: 45, color: '#3F3F3F' }}>No Courses</Text>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, marginTop: 10, textAlign: 'center', width: 315, height: 42, color: '#3F3F3F' }}>Looks like you have not enrolled for any course yet</Text>
                <TouchableOpacity style={{ width: 198, height: 40, backgroundColor: '#1e0094', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 90, marginBottom: 85}} onPress={() => {navigation.navigate('SearchScreen', {dataCoBlo: props.dataCourses})}}>
                    <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#fff' }}>Explore Courses</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUserData: store.reducer.currentUserData,
    dataCourses: store.reducer.dataCourses,
    dataBlogs: store.reducer.dataBlogs,

})

const mapDispatchProps = (dispatch) => bindActionCreators({ reload, }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(MyCourse);

