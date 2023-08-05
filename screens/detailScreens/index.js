import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Lectures from './Lectures';
import SimilarCourses from './SimilarCourses';
import { images } from '../../assets';
import Overview from './Overview';

const DetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute().params.data;
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginTop: 15, marginLeft: 26 }}>
                <Image source={images.arrowLeft} style={{ width: 28, height: 28, }} />
            </TouchableOpacity>
            <Image source={{ uri: route.img }} style={{ width: '100%', height: 285, borderRadius: 15, marginTop: 19 }} />
            <View style={{ marginTop: 9, paddingLeft: 25 }}>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium', lineHeight: 21.09, color: '#3F3F3F' }}>{route.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', lineHeight: 14.06, color: '#3F3F3F' }}>{route.rating}</Text>
                    <Image source={images.star} style={{ width: 14, height: 14, marginLeft: 4 }} />
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', lineHeight: 14.06, marginLeft: 22, color: '#3F3F3F' }}>{route.learners} Learners</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 28 }}>
                <TouchableWithoutFeedback onPress={() => { setSelectedTab(0) }}>
                    <Text style={{ fontSize: 18, fontFamily: selectedTab == 0 ? 'Roboto-Medium' : 'Roboto-Regular', lineHeight: 21.09, borderBottomWidth: selectedTab == 0 ? 1.5 : 0, paddingBottom: 5, borderColor: '#1E0094', color: selectedTab == 0 ? '#1E0094' : '#3F3F3F' }}>Overview</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => { setSelectedTab(1) }}>
                    <Text style={{ fontSize: 18, fontFamily: selectedTab == 1 ? 'Roboto-Medium' : 'Roboto-Regular', lineHeight: 21.09, borderBottomWidth: selectedTab == 1 ? 1.5 : 0, paddingBottom: 5, borderColor: '#1E0094', color: selectedTab == 1 ? '#1E0094' : '#3F3F3F' }}>Lectures</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => { setSelectedTab(2) }}>
                    <Text style={{ fontSize: 18, fontFamily: selectedTab == 2 ? 'Roboto-Medium' : 'Roboto-Regular', lineHeight: 21.09, borderBottomWidth: selectedTab == 2 ? 1.5 : 0, paddingBottom: 5, borderColor: '#1E0094', color: selectedTab == 2 ? '#1E0094' : '#3F3F3F' }}>Similar Courses</Text>
                </TouchableWithoutFeedback>

            </View>

            {
                selectedTab == 0 ?
                    // <View style={{ flex: 1, marginTop: 16 }}>
                    //     <View style={{ marginLeft: 25 }}>
                    //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    //             <Image source={images.clock} style={{ width: 32, height: 32, marginLeft: 3 }} />
                    //             <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 25 }}>6 Hours</Text>
                    //         </View>

                    //         <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    //             <Image source={images.carbonCertificate} style={{ width: 32, height: 32, marginLeft: 3 }} />
                    //             <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 25 }}>Completion Certificate</Text>
                    //         </View>

                    //         <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                    //             <Image source={images.skillLevel} style={{ width: 32, height: 32, marginLeft: 3 }} />
                    //             <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, marginLeft: 25 }}>Beginner</Text>
                    //         </View>
                    //     </View>

                    //     <View style={{ marginLeft: 25, marginTop: 37, }}>
                    //         <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09,}}>What will I learn ?</Text>
                    //         <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 14.06, marginTop: 5, width: '85%', height: 56 }} numberOfLines={3}>{value}</Text>
                    //         <Text style={{ fontSize: 14, fontFamily: 'Roboto-Regular',  lineHeight: 14.06, color: '#0040E3' }}>Read More</Text>
                    //     </View>

                    //     <View style={{ marginTop: 17, marginLeft: 25 }}>
                    //         <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 21.09, }}>Ratings and Reviews</Text>

                    //         <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    //             <Text style={{ fontSize: 28, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 32.81, }}>3.4</Text>

                    //             <View style={{ marginLeft: 18, }}>
                    //                 <AirbnbRating showRating={false} size={20} count={5} defaultRating={1} />
                    //                 <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', color: '#3F3F3F', lineHeight: 14.06, marginLeft: 4, marginTop: 5 }}>3 review</Text>
                    //             </View>
                    //         </View>
                    //     </View>

                    //     <TouchableOpacity style={{ width: 300, height: 40, backgroundColor: '#1e0094', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 25, alignSelf: 'center', marginBottom: 8 }} onPress={() => { navigation.navigate('StartedCoursesScreen') }}>
                    //         <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, color: '#fff' }}>Start Learning</Text>
                    //     </TouchableOpacity>
                    // </View>

                    <Overview />

                    :
                    selectedTab == 1 ?

                        (<Lectures />)

                        :

                        (<SimilarCourses />)
            }





        </ScrollView>
    )
}

export default DetailScreen;

