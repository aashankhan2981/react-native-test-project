

import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import Blogs from './screens/blogs/Blogs';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import MoreCourse from './screens/MoreCourse';
import SearchScreen from './screens/search/SearchScreen';
import MyCourse from './screens/MyCourse';
import DetailScreen from './screens/detailScreens';
import StartedCoursesScreen from './screens/StartedCoursesScreen';
import Search from './screens/search/Search';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlogDetailScreen from './screens/blogs/BlogDetailScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <SafeAreaProvider> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="AuthMain" component={AuthMain} /> */}
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="MyCourse" component={MyCourse} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="Blogs" component={Blogs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="BlogDetailScreen" component={BlogDetailScreen} />
          <Stack.Screen name="StartedCoursesScreen" component={StartedCoursesScreen} />
          <Stack.Screen name="Courses" component={MoreCourse} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Profile" component={Profile} /> */}
        </Stack.Navigator>
        {/* </SafeAreaProvider> */}
      </NavigationContainer>
    </Provider>
    // <View>
    //   <Text>Hi There</Text>
    // </View>
  );
}



export default App;
