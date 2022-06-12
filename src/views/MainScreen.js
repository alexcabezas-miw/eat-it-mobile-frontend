import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./profile/ProfileScreen";
import SearchScreen from "./products/SearchScreen";
import ScanScreen from "./products/ScanScreen";



import { Ionicons } from '@expo/vector-icons';
import CredentialsProviderService from "../service/CredentialsProviderService";

const Tab = createBottomTabNavigator();
CredentialsProviderService.getInstance().setCredentials("acabezas", "12345") // FIXME: Remove when creating the login

export default function MainScreen() {
    return (
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 17,
                },
            })} initialRouteName="Profile">
                <Tab.Screen name="Scan" component={ScanScreen} options={{
                    tabBarLabel: 'Scan',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="scan" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Buscar" component={SearchScreen} options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Mi perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle" color={color} size={size} />
                    ),
                }} />

            </Tab.Navigator>
    );
}