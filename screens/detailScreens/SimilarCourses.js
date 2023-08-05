import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MoreScreenCard from '../../common/customCards/MoreScreenCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reload } from '../../redux/actions'

const SimilarCourses = (props) => {
  return (
    <View style={{ flex: 1, }}>
            <View style={{}}>
                <FlatList data={props.dataCourses} showsVerticalScrollIndicator={false} scrollEnabled={false}  renderItem={({ item, index }) => {
                    return (
                        <MoreScreenCard name={item.name} rating={item.rating} learners={item.learners} img={item.img} item={item}/>
                    )
                }} />
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

export default connect(mapStateToProps, mapDispatchProps)(SimilarCourses);

