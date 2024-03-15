import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home'; // Import your screen components
import Cart from '../screens/Cart';
import Demo from '../screens/Demo';

import StackNavigator from './StackNavigator';
import {Image, View} from 'react-native';
import Wishlist from '../screens/Wishlist';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: '#5784e9',

          borderTopWidth: 0,
          height: 80,
          marginBottom: 20,
          borderRadius: 35,
          marginLeft: 25,
          marginRight: 25,
          position: 'absolute',
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/home.png')}
              style={{
                width: 25,
                height: 25,
                marginTop: 30,
                tintColor: focused ? 'white' : 'black',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Demo"
        component={Demo}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: 'orange',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                borderRadius: 50,
              }}
            >
              <Image
                source={require('../assets/plus.png')}
                style={{
                  width: 25,
                  height: 25,

                  tintColor: focused ? 'white' : 'black',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/heart.png')}
              style={{
                width: 25,
                height: 25,
                marginTop: 30,
                tintColor: focused ? 'white' : 'black',
              }}
            />
          ),
        }}
      />
      {/* Add more screens as needed */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
