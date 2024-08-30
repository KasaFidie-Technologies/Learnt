// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Language from './Language/Language';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Social from './Social/Social';
import SignUp from './Signup/SignUp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Social} />
    </Tab.Navigator>
  );
}

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Language'}>
        <Stack.Screen 
          name="HomeTabs" 
          component={HomeTabs} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Language" component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;