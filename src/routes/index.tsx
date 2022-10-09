import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Posts, ToDo, Albuns, Github} from '../screens';

const {Navigator, Screen} = createBottomTabNavigator();

const Routes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="Posts" component={Posts} />
    <Screen name="Albuns" component={Albuns} />
    <Screen name="ToDo" component={ToDo} />
    <Screen name="Github" component={Github} />
  </Navigator>
);
export default Routes;
