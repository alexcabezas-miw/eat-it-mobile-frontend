import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import IngredientComponent from '../product/IngredientComponent';

export default class ProfileIngredientsInformationComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { restrictedIngredients } = this.props;
        return ( 
            <View style={styles.container}>
                <Text style={styles.labelText}>Ingredientes que no quiero: </Text>
                <View style={styles.ingredientsContainer}>
                    {restrictedIngredients.length == 0 && <Text style={[styles.labelText, {fontStyle: 'italic'}]}>Sin configurar</Text>}
                    {restrictedIngredients.length != 0 && restrictedIngredients.map((ingredient, index) => <IngredientComponent key={index} ingredientName={ingredient}/>) }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ingredientsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    container: {
        margin: 20
    },

    labelText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})