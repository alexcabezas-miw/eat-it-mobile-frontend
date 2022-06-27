
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../products/ProductScreen';
import ShoppingListComponent from '../../components/shoppingcart/ShoppingListComponent';


export default class ShoppingCartScreen extends Component {
    render() {
        const Stack = createNativeStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Lista de productos"
                    component={ShoppingListComponent}
                />
                <Stack.Screen name="Product" component={ProductScreen} />
            </Stack.Navigator>
        );
    }
}