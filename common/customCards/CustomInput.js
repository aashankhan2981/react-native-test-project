import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ value, type, placeholder, keyboardType, onChangeText }) => {
    return (
        <View style={{ borderBottomWidth: 1, marginTop: 20, width: '90%', borderColor: '#BeBeBe', borderRadius: 10, alignSelf: 'center' }}>

            <TextInput secureTextEntry={type ? true : false} placeholder={placeholder} style={{ width: '80%', height: 50, marginLeft: 10 }} value={value} keyboardType={keyboardType} onChangeText={(txt) => { onChangeText(txt) }} />

        </View>
    )
}

export default CustomInput;

