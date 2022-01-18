import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateDietScreen from './src/screens/CreateDietScreen';
import NutritionScreen from './src/screens/NutritionScreen';
import ViewDietScreen from './src/screens/ViewDietScreen';  

import { Provider as AuthProvider } from './src/context/AuthContext';

import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  LoginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  MainFlow: createStackNavigator({
    Home: HomeScreen,
    CreateDiet: CreateDietScreen,
    Nutrition: NutritionScreen,
    ViewDiet: ViewDietScreen,
  }, {
    initialRouteName: 'Home',
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <AuthProvider>
          <App ref={(navigator) => setNavigator(navigator)}/>
        </AuthProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
};
