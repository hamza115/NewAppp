import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';

export default function Wishlist() {
  return (
    <View>
      <Header
        title={'Wishlist'}
        rightIcon={{source: require('../assets/search.png')}}
      />
    </View>
  );
}
