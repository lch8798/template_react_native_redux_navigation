import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
IonIcons.loadFont(); // for IOS

// Screens
import HomeScreen from './../screens/HomeScreen';
import SettingScreen from './../screens/SettingScreen';
import AgreementScreen from './../screens/AgreementScreen';

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen,
    SettingScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = 'ios-close-circle';

        switch (routeName) {
          case 'HomeScreen':
            iconName = 'md-wallet';
            break;
          case 'SettingScreen':
            iconName = 'ios-settings';
            break;
        }

        const color = '#aaaaaa';
        const focusColor = '#4f473e';
        let currentColor = color;

        if (focused) currentColor = focusColor;

        return <IonIcons name={iconName} size={20} color={currentColor} />;
      },
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: '#4f473e',
      inactiveTintColor: '#aaa',
      style: {
        paddingVertical: 5,
        height: 53,
      },
    },
  },
);

const AgreementStack = createStackNavigator(
  {
    AgreementScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'Agreement',
      headerLeft: () => (
        <IonIcons
          name={'md-arrow-back'}
          size={25}
          style={{ paddingHorizontal: 20 }}
          onPress={() => navigation.pop()}
        />
      ),
    }),
  },
);

const AppStack = createStackNavigator(
  {
    MainScreen: TabNavigator,
    AgreementScreen: AgreementStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
);

export default createAppContainer(AppStack);
