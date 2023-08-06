import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../common/customCards/CustomInput';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import MainScreen from '../MainScreen';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

const SignUp = () => {
    const [details, setDetails] = useState({

        userName: '',
        email: '',
        password: '123456',
        retypePassword: '',
        errPassword: 'false',
        errRetypePassword: 'false',
        errUserNme: 'false',
        errEmail: 'false',

    })
    const [user, setUser] = useState();
    const [initializing, setInitializing] = useState(true);
    const [disability, setDisability] = useState(false);
    const [visibleLoad, setVisibleLoad] = useState(false);


    const navigation = useNavigation();

    function onAuthStateChanged(user) {


        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    useEffect(() => {
        usrNmeValid(details.userName);

    }, [details.userName])

    useEffect(() => {

        emailValid(details.email);
    }, [details.email,])

    useEffect(() => {

        retypePasswordValidation(details.retypePassword);
    }, [details.retypePassword])


    useEffect(() => {

        passwordValidation(details.password);
    }, [details.password])


    useEffect(() => {

        console.log(details.userName.length);
        if (details.errEmail == 'allowed' && details.errUserNme == 'allowed' && details.errPassword == 'allowed' && details.errRetypePassword == 'allowed' && details.userName.length > 0 && details.email.length > 0 && details.password.length > 0 && details.retypePassword.length > 0) {

            setDisability(true);
        } else {

            setDisability(false);
        }

    }, [details])





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


    const retypePasswordValidation = (retypePassword) => {

        if (!(details.password == retypePassword)) {
            setDetails({
                ...details,
                errRetypePassword: 'true'
            })

        }
        else {
            setDetails({
                ...details,
                errRetypePassword: 'allowed'
            })

        }

    }


    const usrNmeValid = (usrnme) => {

        console.log('usrNmeValid');

        if (details.userName.length == 0) {
            console.log("Not Valid");
            setDetails({
                ...details,
                errUserNme: 'true'
            })

        }
        else {
            console.log("Valid");
            setDetails({
                ...details,
                errUserNme: 'allowed'
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


    function onRegister() {
        setVisibleLoad(true);
        auth().createUserWithEmailAndPassword(details.email, details.password)
            .then(() => {
                setVisibleLoad(false);

                firestore().collection("users")
                    .doc(auth().currentUser.uid)
                    .set({
                        userName: details.userName,
                        email: details.email,
                        password: details.password,

                    }).then(
                        () => {
                            setDisability(false);
                            console.log('validationAuth');
                            navigation.navigate('MainScreen')
                        })
            })
            .catch((e) => {
                setVisibleLoad(false);
                Alert.alert(
                    'Wrong!',
                    'Check email/password.',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                    ],
                );
                console.log('Error in Authentication Singnup Screen', e);

            })

    }
    if (!user) {
        return (
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 45, }} >
                        <TouchableOpacity style={{ width: 120, height: 45, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }} onPress={() => { navigation.navigate('SignIn') }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, color: '#000' }}>SIGNIN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 120, height: 45, backgroundColor: '#1e0094', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 20 }} onPress={() => { navigation.navigate('SignUp') }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, color: '#fff' }}>SIGNUP</Text>
                        </TouchableOpacity>
                    </View>

                    <CustomInput placeholder={'User Name'} onChangeText={(txt) => {
                        setDetails({
                            ...details,
                            userName: txt
                        })

                    }} />
                    {details.errUserNme == 'true' ? <Text style={{ fontSize: 16, marginTop: 5, color: 'red', marginLeft: 25, }}>Name must be present..</Text> : null}

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

                    <CustomInput type={'password'} placeholder={'Re-type Password'} onChangeText={(txt) => {
                        setDetails({
                            ...details,
                            retypePassword: txt
                        })
                    }} />
                    {details.errRetypePassword == 'true' ? <Text style={{ fontSize: 16, marginBottom: details.errRetypePassword == 'true' ? 45 : null, color: 'red', marginTop: 5, marginLeft: 25 }}>Password not correct or mismatching..</Text> : null}

                    <TouchableOpacity style={{ width: '90%', height: 65, backgroundColor: disability ? '#1e0094' : '#DEDAEF', justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginLeft: 20, marginTop: 65, marginBottom: 10 }} onPress={() => {
                        onRegister()
                    }} disabled={disability ? false : true}>
                        <Text style={{ fontSize: 20, fontFamily: 'Roboto-Regular', fontWeight: '400', lineHeight: 21.09, color: '#fff' }}>Get Started</Text>
                    </TouchableOpacity>

                    <Spinner
                        visible={visibleLoad}
                        textContent={'Loading...'}
                        textStyle={{ color: '#1e0094' }}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    return (
        <MainScreen />
    )

}

export default SignUp;
