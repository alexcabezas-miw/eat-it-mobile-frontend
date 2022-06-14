import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import PersonalInformationRegistrationScreen from './PersonalInformationRegistrationScreen';
import IngredientsRegistrationScreen from './IngredientsRegistrationScreen';


export default function RegisterScreen({ navigation }) {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator initialRouteName="PersonalInformationRegistrationScreen">
        <Stack.Screen
          name="PersonalInformationRegistrationScreen"
          component={PersonalInformationRegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IngredientsRegistrationScreen"
          component={IngredientsRegistrationScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  )
}
