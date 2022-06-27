import { Checkbox } from 'native-base';
import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class RestrictionElement extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {restriction} = this.props;
        const ingredientNames = restriction.ingredients.join(", ")

        return (
            <View style={styles.container}>
                <View style={{width: "90%"}}>
                    <Text style={styles.restrictionName}>{restriction.name}</Text>
                    <Text>Se compone de los siguientes alimentos e ingredientes: <Text style={styles.ingredients}>{ingredientNames}</Text> </Text>
                </View>
                <Checkbox defaultIsChecked={this.props.selectedItems.indexOf(restriction.name) >= 0 ? true : false}
                    value='selected' size="lg" accessibilityLabel="Restriction is selected or not" onChange={(value) => this.handleChange(restriction.name, value)}/>
            </View>
        )
    }

    handleChange(restrictionName, checked) {
        if(checked) {
            this.props.selectedItems.push(restrictionName)
        }
        else {
            this.props.selectedItems.splice(this.props.selectedItems.indexOf(restrictionName), 1)
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