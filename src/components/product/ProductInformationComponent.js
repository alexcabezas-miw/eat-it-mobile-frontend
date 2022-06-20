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
        const {product, blockingIngredients} = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.ingredientsText}>Ingredientes: </Text>
                </View>
                <View style={styles.ingredientsContainer}>
                    {product.ingredients.map((item, i) => (
                        <IngredientComponent key={i} ingredientName={item} blocking={blockingIngredients.includes(item) ? true : false} />
                    ))}
                </View>
            </View>
        )
    }

}