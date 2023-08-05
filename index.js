/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import CourseCard from './common/customCards/CourseCard';
import BlogScreenCard from './common/customCards/blogsCards/BlogScreenCard';
import StartedScreenCard from './common/customCards/StartedScreenCard';
import StartedCoursesScreen from './screens/StartedCoursesScreen';
import LectureCard from './common/customCards/LectureCard';
import SignIn from './screens/auth/SignIn';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
