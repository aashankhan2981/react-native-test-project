import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BlogCard = ({ img, authorNme, title, body, item }) => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('BlogDetailScreen', {data: item})}}>
            <View style={{
                width: 230, height: 121, marginHorizontal: 12.5, backgroundColor: '#fff', flexDirection: 'row', borderRadius: 10, marginTop: 15, shadowColor: "grey",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 8,
                marginBottom: 12
            }}>
                <Image source={{uri: img}} style={{ width: 117, height: 121, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                <View style={{ paddingLeft: 8, paddingVertical: 8, justifyContent: 'center',  }}>
                    <Text style={{ fontSize: 10, fontFamily: 'Roboto-Light', lineHeight: 11.72, color: '#3F3F3F'}}>{authorNme}</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Roboto-Regular', lineHeight: 14.06, marginTop: 5, width: 86, height: 42, color: '#3F3F3F' }}>{title}</Text>
                    <Text style={{ fontSize: 8, fontFamily: 'Roboto-Regular', lineHeight: 9.38, marginTop: 5, textAlign: 'left', width: 104, height: 45, color: '#3F3F3F' }}>{body}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BlogCard;

