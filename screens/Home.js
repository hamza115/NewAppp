import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from '../components/BottomNavigator';
import Header from '../components/Header';
import foodData from '../data/FoodData';

export default function Home({navigation}) {
  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          backgroundColor: '#ce8abd',
          width: 250,
          height: 200,
          marginLeft: 20,
          borderRadius: 25,
          zIndex: -1,
          overflow: 'visible', // Allow content to overflow the container
        }}
      />
      <Image
        source={item.image}
        style={{
          position: 'absolute',
          top: -10, // Adjust the top position to move the image outside the box
          left: 20, // Adjust the left position if needed
          width: 300,
          height: 300,
          borderRadius: 50,
          zIndex: 9999, // Optional: Apply borderRadius to create a circular image
        }}
      />

      {/* Background Section */}
    </View>
  );

  return (
    <View style={{height: '100%'}}>
      <Header
        title="Hello Freinds"
        leftIcon={{source: require('../assets/avatar.png')}}
        rightIcon={{source: require('../assets/bag.png')}}
        navigateToLeft="Profile"
        navigateToRight="Cart"
      />

      {/* Search Bar */}
      <View style={{marginTop: 45}}>
        <TextInput
          placeholder="Enter Something"
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            paddingLeft: 20,
            backgroundColor: 'white',
            fontFamily: 'AsapSemi',
          }}
        />
      </View>

      {/* Popular Foods */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginLeft: 20,
              marginTop: 25,
              fontFamily: 'AsapSemi',
            }}
          >
            Popular Foods
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Demo')}
            style={{
              marginTop: 25,
              marginRight: 20,
              width: 120,
              height: 50,
              backgroundColor: '#678fea',
              borderRadius: 25,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 15,
                color: 'white',

                fontFamily: 'AsapSemi',

                justifyContent: 'center',
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Food */}
      <View style={{marginTop: 65}}>
        <FlatList
          data={foodData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
