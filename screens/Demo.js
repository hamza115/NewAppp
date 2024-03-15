import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';

export default function Demo() {
  return (
    <View>
      <Header
        title={'Demo'}
        rightIcon={{source: require('../assets/search.png')}}
      />
    </View>
  );
}
