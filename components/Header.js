import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title,
  leftIcon,
  rightIcon,
  backgroundImage,
  navigateToLeft,
  navigateToRight,
  disabled,
}) => {
  const navigation = useNavigation();

  const handleLeftIconPress = () => {
    if (disabled) {
      return; // If disabled, do nothing
    }

    if (navigateToLeft) {
      navigation.navigate(navigateToLeft);
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleRightIconPress = () => {
    if (navigateToRight) {
      navigation.navigate(navigateToRight);
    }
  };

  return (
    <View style={{height: 150, backgroundColor: 'white', borderRadius: 20}}>
      <View
        style={{
          marginTop: 50,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {leftIcon ? (
          <TouchableOpacity onPress={handleLeftIconPress} disabled={disabled}>
            <Image
              source={leftIcon.source}
              style={{width: 35, height: 35, marginLeft: 20}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLeftIconPress} disabled={disabled}>
            <Image
              source={require('../assets/back.png')}
              style={{width: 35, height: 35, marginLeft: 20}}
            />
          </TouchableOpacity>
        )}

        {rightIcon && (
          <TouchableOpacity onPress={handleRightIconPress}>
            <Image
              source={rightIcon.source}
              style={{width: 35, height: 35, marginRight: 20}}
            />
          </TouchableOpacity>
        )}
      </View>
      {title && (
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 28,
            letterSpacing: 1,
            fontFamily: 'AsapSemi',
          }}
        >
          {title}
        </Text>
      )}
    </View>
  );
};

export default Header;
