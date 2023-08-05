import { FETCH_CURRENT_USER_DATA, FETCH_DATA_BLOGS, FETCH_DATA_COURSES } from "./constants"

const initialState = {
    currentUserData: [],
    dataCourses: [],
    dataBlogs: [],
    allCoursesData: []
}

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER_DATA:
            return {
                ...state,
                currentUserData: action.currentUserData
            }
            case FETCH_DATA_COURSES:
            return {
                ...state,
                dataCourses: action.dataCourses
            }
            case FETCH_DATA_BLOGS:
            return {
                ...state,
                dataBlogs: action.dataBlogs,
                allCoursesData: action.allCoursesData
            }
        default:
            return state;
    }
}