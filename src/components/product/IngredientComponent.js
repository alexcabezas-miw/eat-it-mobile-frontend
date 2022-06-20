import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#e1e1e1',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        margin: 2
    },

    blocking: {
        backgroundColor: 'white',
        borderColor: '#ff8a80',  
    },

    ingredientText: {
        fontSize: 20
    }
})

export default class IngredientComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { ingredientName, blocking } = this.props
        return (
            <View style={[styles.container, blocking ? styles.blocking : undefined]}>
                <Text style={styles.ingredientText}>{ingredientName}</Text>
            </View>
        )
    }
}