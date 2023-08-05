import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import MoreScreenCard from '../common/customCards/MoreScreenCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reload, } from '../redux/actions';
import { images } from '../assets';

const MoreCourse = (props) => {
    const name = [useRoute().params.name];
    const navigation = useNavigation();


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', width: '100%', height: 34, backgroundColor: '#fff', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={images.arrowLeft} style={{ marginLeft: 26, width: 24, height: 24, }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', lineHeight: 21.09, marginLeft: 12, color: '#3F3F3F'}}>{name}</Text>


            </View>
            <FlatList data={props.dataCourses} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
                return (
                    <>
                        {item.categoryNme == name ? <MoreScreenCard name={item.name} rating={item.rating} learners={item.learners} img={item.img} item={item}/> : ''}

                    </>



                )
            }} />
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUserData: store.reducer.currentUserData,
    dataCourses: store.reducer.dataCourses,
    dataBlogs: store.reducer.dataBlogs,

})

const mapDispatchProps = (dispatch) => bindActionCreators({ reload, }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(MoreCourse);
