import { FETCH_CURRENT_USER_DATA, FETCH_DATA_BLOGS, FETCH_DATA_COURSES } from "./constants";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export function reload() {
    return ((dispatch) => {

        dispatch(fetchCurrentUserData());
        dispatch(fetchDataCourses());
        dispatch(fetchDataBlogs());

    })
}

export function fetchCurrentUserData() {
    return ((dispatch) => {
        // console.log('fetchUsersData');
        firestore()
            .collection("users")
            .doc(auth()?.currentUser?.uid)
            .get()
            .then((snapshot) => {

                const currentUserData = snapshot._data;
                // console.log('currentUserData: ', currentUserData);

                dispatch({ type: FETCH_CURRENT_USER_DATA, currentUserData })
            })
    })
} 


export function fetchDataCourses() {
    return ((dispatch) => {
        // console.log('fetchUsersData');
        firestore()
            .collection("dataCourses")
            .get()
            .then((snapshot) => {
                console.log('snapshot: ', snapshot);
                const dataCourses = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })

                const allCoursesData = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { CyberSecurity: id, ...data }
                })

                 console.log('dataCourses: ', dataCourses);
                 dispatch({ type: FETCH_DATA_COURSES, dataCourses, allCoursesData })

                
            })
    })
}

export function fetchDataBlogs() {
    return ((dispatch) => {
        // console.log('fetchUsersData');
        firestore()
            .collection("dataBlogs")
            .get()
            .then((snapshot) => {

                const dataBlogs = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })

                 console.log('dataBlogs: ', dataBlogs);
                 dispatch({ type: FETCH_DATA_BLOGS, dataBlogs })
            })
    })
}