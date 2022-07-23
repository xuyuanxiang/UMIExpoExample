import React from 'react';
import {StatusBar} from 'react-native';
import {Icon} from '@ant-design/react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../tabs/HomeScreen';
import ProfileScreen from '../tabs/ProfileScreen';
const {Navigator, Screen} = createBottomTabNavigator();

function IndexPage() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator>
        <Screen
          name="主页"
          options={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              // You can return any component that you like here!
              return <Icon size={size} name="home" color={color} />;
            },
          })}
          component={HomeScreen}
        />
        <Screen
          name="个人"
          options={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              // You can return any component that you like here!
              return <Icon size={size} name="profile" color={color} />;
            },
          })}
          component={ProfileScreen}
        />
      </Navigator>
    </>
  );
}
IndexPage.title = '';
IndexPage.headerTintColor = '#ffffff';
IndexPage.headerTitleStyle = {
  fontWeight: 'bold',
  display: 'none',
};
IndexPage.headerStyle = {
  backgroundColor: '#fff',
};

export default IndexPage;
