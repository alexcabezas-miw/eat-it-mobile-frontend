import React, { Component } from 'react'

import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import IngredientComponent from './IngredientComponent'


const styles = StyleSheet.create({
    container: {
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },

    ingredientsText: {
        fontWeight: 'bold',
        fontSize: 25
    },

    ingredientsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})


export default class ProductInformationComponent extends Component {

    render() {
        const mockedIngredients = [
            { key: "Agua" }, { key: "Harina" }, { key: "Cebolla" }, { key: "Carne de pavo" },
            { key: "Lechuga" }, { key: "Arroz" }, { key: "Caldo de pollo" }, { key: "Ajo" }, { key: "Orégano" }, { key: "Cacahuetes" }]

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.ingredientsText}>Ingredientes: </Text>
                </View>
                <View style={styles.ingredientsContainer}>
                    {mockedIngredients.map((item, i) => (
                        <IngredientComponent key={i} ingredientName={item.key} />
                    ))}
                </View>
            </View>
        )
    }

}