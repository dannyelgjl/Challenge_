import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostsIcon from '../assets/icons/home.svg';
import AlbumIcon from '../assets/icons/album.svg';
import GithubIcon from '../assets/icons/github.svg';
import ToDoIcon from '../assets/icons/todo.svg';
import {Posts, ToDo, Albums, Github} from '../screens';
import THEME from '../theme/theme';

const {Navigator, Screen} = createBottomTabNavigator();

const Routes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: THEME.PRIMARY.PRIMARY_BLUE,
      },
      tabBarActiveBackgroundColor: THEME.SECONDARY.SECONDARY_BLUE,
    }}>
    <Screen
      options={() => ({
        tabBarIcon: () => (
          <PostsIcon
            width={24}
            height={24}
            color={THEME.SECONDARY.SECONDARY_LIGHT_BLUE}
          />
        ),
      })}
      name="Posts"
      component={Posts}
    />
    <Screen
      options={() => ({
        tabBarIcon: () => (
          <AlbumIcon
            width={24}
            height={24}
            color={THEME.SECONDARY.SECONDARY_LIGHT_BLUE}
          />
        ),
      })}
      name="Albums"
      component={Albums}
    />
    <Screen
      options={() => ({
        tabBarIcon: () => (
          <ToDoIcon
            width={24}
            height={24}
            color={THEME.SECONDARY.SECONDARY_LIGHT_BLUE}
          />
        ),
      })}
      name="ToDo"
      component={ToDo}
    />
    <Screen
      options={() => ({
        tabBarIcon: () => (
          <GithubIcon
            width={24}
            height={24}
            color={THEME.SECONDARY.SECONDARY_LIGHT_BLUE}
          />
        ),
      })}
      name="Github"
      component={Github}
    />
  </Navigator>
);
export default Routes;
