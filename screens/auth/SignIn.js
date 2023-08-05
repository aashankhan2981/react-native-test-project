import { StyleSheet, Text, View, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInput from '../../common/customCards/CustomInput';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import MainScreen from '../MainScreen';
import Spinner from 'react-native-loading-spinner-overlay';

const SignIn = (props) => {
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [disability, setDisability] = useState(false);
    const [visibleLoad, setVisibleLoad] = useState(false);

    const [details, setDetails] = useState({
        email: '',
        password: '123456',
        errPassword: 'false',
        errEmail: 'false',
    })


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    //         props.setVisibility(false);

    // }, []);


    useEffect(() => {

        emailValid(details.email);
    }, [details.email,])


    useEffect(() => {

        passwordValidation(details.password);
    }, [details.password])


    useEffect(() => {

        if (details.errEmail == 'allowed' && details.errPassword == 'allowed' && details.email.length > 0 && details.password.length > 0) {

            setDisability(true);
        } else {

            setDisability(false);
        }

    }, [details])


    function signIn() {
        setVisibleLoad(true);
        auth().signInWithEmailAndPassword(details.email, details.password)
            .then((userCredentials) => {
                setVisibleLoad(false);
                setDisability(false);
                const user = userCredentials.user;
                console.log('Signed In with:', user.email);
                navigation.navigate('MainScreen');
            })
            .catch((err) => {
                setVisibleLoad(false);
                console.warn("Something went wrong", err);
            })
    }


    const passwordValidation = (password) => {
        console.log('password: ', password);

        if (!(password.length > 5)) {
            console.log("Not Valid");
            setDetails({
                ...details,
                errPassword: 'true'
            })

        } else {
            console.log("Valid");
            setDetails({
                ...details,
                errPassword: 'allowed'
            })

        }

    }


    const emailValid = emailPr => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;


        if (re.test(emailPr) || regex.test(emailPr)) {
            setDetails({
                ...details,
                errEmail: 'allowed'
            })

            console.log("Valid");
        } else {
            setDetails({
                ...details,
                errEmail: 'true'
            })

            console.log("Not Valid");
        }
    };


    if (!user) {

        return (

            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 45, }} >
                    <TouchableOpacity style={{ width: 120, height: 45, backgroundColor: '#1e0094', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }} onPress={() => { navigation.navigate('SignIn') }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, color: '#fff' }}>SIGNIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 120, height: 45, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 20 }} onPress={() => { navigation.navigate('SignUp') }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, color: '#000' }}>SIGNUP</Text>
                    </TouchableOpacity>
                </View>

                <CustomInput placeholder={'Email'} onChangeText={(txt) => {
                    setDetails({
                        ...details,
                        email: txt
                    })
                }} />
                {details.errEmail == 'true' ? <Text style={{ fontSize: 16, marginBottom: details.errEmail == 'true' ? 45 : null, color: 'red', marginLeft: 25, marginTop: 5 }}>Email not correct..</Text> : null}

                <CustomInput type={'password'} placeholder={'Password'} onChangeText={(txt) => {
                    setDetails({
                        ...details,
                        password: txt
                    })
                }} />
                {details.errPassword == 'true' ? <Text style={{ fontSize: 16, marginBottom: details.errPassword == 'true' ? 45 : null, color: 'red', marginTop: 5, marginLeft: 25 }}>Password should be at least 6 characters..</Text> : null}
                <TouchableOpacity disabled={disability ? false : true} style={{ width: '90%', height: 65, backgroundColor: disability ?  '#1e0094' : '#DEDAEF', justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginLeft: 20, marginTop: 65 }} onPress={() => { signIn() }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, color: '#fff' }}>Get Started</Text>
                </TouchableOpacity>

                <Spinner
                    visible={visibleLoad}
                    textContent={'Loading...'}
                    textStyle={{ color: '#1e0094' }}
                />
            </ScrollView>
        )
    } else {

        return (
            <MainScreen />
        )
    }
}

export default SignIn;
