import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';

export default function Cart() {
  return (
    <View style={{backgroundColor: '#eae9eb', height: '100%'}}>
      <Header
        title={'Cart'}
        rightIcon={{source: require('../assets/search.png')}}
      />
      <Text>There is no Item in your Cart</Text>
    </View>
  );
}
