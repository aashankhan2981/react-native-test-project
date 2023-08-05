import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState, } from 'react'
import Blogs from './blogs/Blogs';
import Profile from './Profile';
import HomeScreen from './HomeScreen';
import MyCourse from './MyCourse';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reload } from '../redux/actions';
import { images } from '../assets';

const MainScreen = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        props.reload();
        console.log('props.currentUserData: ', props.currentUserData);
    }, []);


    return (
        <View style={{ flex: 1 }}>
            {selectedTab == 0 ? (<HomeScreen />) : selectedTab == 1 ? (<MyCourse />) : selectedTab == 2 ? (<Blogs />) : (<Profile />)}

            <View style={{ width: '100%', position: 'absolute', backgroundColor: '#fff', height: 70, bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                <TouchableOpacity style={{ width: 32, height: 48, }} onPress={() => { setSelectedTab(0); }}>
                    <Image source={selectedTab == 0 ? images.homeFilled : images.homeOutline} style={{ width: 32, height: 32, tintColor: selectedTab == 0 ? '#1e0094' : '#000' }} />
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: selectedTab == 0 ? '500' : '400', lineHeight: 11.72, width: 50, marginTop: 8 }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 60, height: 48, justifyContent: 'center', alignItems: 'center' }} onPress={() => { setSelectedTab(1); }}>
                    <Image source={selectedTab == 1 ? images.courseFilled : images.courseOutline} style={{ width: 32, height: 32, tintColor: selectedTab == 1 ? '#1e0094' : '#000' }} />
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: selectedTab == 1 ? '500' : '400', lineHeight: 11.72, width: 60, marginTop: 8 }}>My Course</Text>
                </TouchableOpacity>


                <View style={{ width: 32, height: 48, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center', }} onPress={() => { setSelectedTab(2); }}>
                        <Image source={selectedTab == 2 ? images.blogFilled : images.blogOutline} style={{ width: 32, height: 32, tintColor: selectedTab == 2 ? '#1e0094' : '#000' }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: selectedTab == 2 ? '500' : '400', lineHeight: 11.72, marginTop: 8 }}>Blogs</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={{ width: 60, height: 48, justifyContent: 'center', alignItems: 'center' }} onPress={() => { setSelectedTab(3); }}>
                    <Image source={selectedTab == 3 ? images.profileFilled : images.profileOutline} style={{ width: 32, height: 32, tintColor: selectedTab == 3 ? '#1e0094' : '#000' }} />
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', fontWeight: selectedTab == 3 ? '500' : '400', lineHeight: 11.72, width: 60, marginTop: 8 }}>My Profile</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}
const mapStateToProps = (store) => ({
    currentUserData: store.reducer.currentUserData,

})

const mapDispatchProps = (dispatch) => bindActionCreators({ reload, }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(MainScreen);

