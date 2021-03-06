import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./profile/ProfileScreen";
import SearchScreen from "./products/SearchScreen";
import ScanScreen from "./products/ScanScreen";



import { Ionicons } from '@expo/vector-icons';
import ShoppingCartScreen from "./shoppingcart/ShoppingCartScreen";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    return (
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 17,
                },
            })} initialRouteName="ShoppingCart">
                <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} options={{
                    tabBarLabel: 'Lista',
                    unmountOnBlur: true,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-cart-outline" color={color} size={size} />
                    ),
                }} />
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