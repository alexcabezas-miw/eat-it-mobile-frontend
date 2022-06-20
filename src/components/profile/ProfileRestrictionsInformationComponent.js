import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import IngredientComponent from '../product/IngredientComponent';

export default class ProfileRestrictionsInformationComponent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { restrictions } = this.props;
        
        return ( 
            <View style={styles.container}>
                <Text style={styles.labelText}>Restricciones a las que pertenezco: </Text>
                <View style={styles.ingredientsContainer}>
                    {restrictions.length == 0 && <Text style={[styles.labelText, {fontStyle: 'italic'}]}>Sin configurar</Text>}
                    {restrictions.length != 0 && restrictions.map((restriction, index) => <IngredientComponent key={index} ingredientName={restriction}/>) }
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
        fontSize: 20
    }
})