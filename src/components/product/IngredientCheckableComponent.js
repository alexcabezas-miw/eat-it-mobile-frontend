import { Checkbox } from 'native-base';
import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class IngredientCheckableComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {ingredient} = this.props;
        return (
            <View style={styles.container}>
                <View style={{width: "90%"}}>
                    <Text style={styles.restrictionName}>{ingredient.name}</Text>
                </View>
                <Checkbox defaultIsChecked={this.props.selectedItems.indexOf(ingredient.name) >= 0 ? true : false}
                    value='selected' size="lg" accessibilityLabel="Ingredient is selected or not" onChange={(value) => this.handleChange(ingredient.name, value)}/>
            </View>
        )
    }

    handleChange(ingredientName, checked) {
        if(checked) {
            this.props.selectedItems.push(ingredientName)
        }
        else {
            this.props.selectedItems.splice(this.props.selectedItems.indexOf(ingredientName), 1)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    restrictionName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    ingredients: {
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})