import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reload, fetchCurrentUserData } from '../redux/actions';
import { images } from '../assets';

const Profile = (props) => {
  const navigation = useNavigation();

  function logOut() {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
        navigation.navigate('SignIn')
      });
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 17, }}>
        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 26 }}>My Profile</Text>
      </View>

      <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 47, alignItems: 'center' }}>
        <View style={{ width: 45, height: 45, backgroundColor: '#D2E4FF', borderRadius: 45 / 2, justifyContent: 'center', alignItems: 'center' }}>
          {
            props.currentUserData ?
              <Text style={{ fontSize: 20, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 28.13, }}>{props.currentUserData?.userName?.charAt(0).toLowerCase() + props.currentUserData?.userName?.charAt(1)?.toLowerCase()}</Text>
              :
              <Text style={{ fontSize: 20, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 28.13, }}></Text>
          }

        </View>

        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 14, fontFamily: 'Roboto-Medium', color: '#3F3F3F', lineHeight: 14.06, }}>{props?.currentUserData?.userName}</Text>
          <Text style={{ fontSize: 14, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 14.06, marginTop: 2 }}>{props?.currentUserData?.email}</Text>
        </View>

      </View>

      <View style={{ marginTop: 35, marginLeft: 25 }}>
        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={images.crossReference} style={{ width: 32, height: 32, }} />
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 12 }}>Refer and Learn</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 23 }}>
          <Image source={images.link} style={{ width: 32, height: 32, }} />
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 12 }}>Connected Accounts</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 23 }}>
          <Image source={images.carbonStar} style={{ width: 32, height: 32, }} />
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 12 }}>Rate App</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 23 }}>
          <Image source={images.carbonShare} style={{ width: 32, height: 32, }} />
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 12 }}>Share App</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 23 }}>
          <Image source={images.privacyTip} style={{ width: 32, height: 32, }} />
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 12 }}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { logOut() }} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 23 }}>
          <Image source={images.signOut} style={{ width: 32, height: 32, }} />
          <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 12 }}>Sign out</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const mapStateToProps = (store) => ({
  currentUserData: store.reducer.currentUserData,

})

const mapDispatchProps = (dispatch) => bindActionCreators({ reload, fetchCurrentUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Profile);
