
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchComponent from '../../components/search/SearchComponent';
import ProductScreen from './ProductScreen';


export default class SearchScreen extends Component {
    render() {
        const Stack = createNativeStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Buscador"
                    component={SearchComponent}
                />
                <Stack.Screen name="Product" component={ProductScreen} />
            </Stack.Navigator>
        );
    }
}