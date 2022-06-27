import React from "react";
import 'react-native-gesture-handler';
import { NativeBaseProvider } from "native-base";
import MainScreen from "./src/views/MainScreen";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ConfirmProvider } from 'react-native-confirm-dialog'
import StartScreen from "./src/views/auth/StartScreen";
import LoginScreen from "./src/views/auth/LoginScreen";
import {StatusBar} from 'react-native';
import RegisterScreen from "./src/views/auth/RegisterScreen";
import CredentialsProviderService from "./src/service/CredentialsProviderService";


export default function App() {
  const Stack = createStackNavigator();

  CredentialsProviderService.getInstance().clearCredentials()

  return (
    <ConfirmProvider>
      <NativeBaseProvider>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content" // Here is where you change the font-color
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartScreen">
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ConfirmProvider>
  );
}