import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

import UsersService from "../../service/users/UsersService"


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e1e1e1',
    },
    
    valid: {
        backgroundColor: '#4CAF50',
    },

    invalid: {
        backgroundColor: '#F44336',
    },

    adviseText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.90)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 2,
    }
})

export default class ProductAdviseComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { canEatIt } = this.props

        return (
            <View style={[styles.container, this.resolveStyle(canEatIt)]}>
                {canEatIt === undefined && (<ActivityIndicator/>)}
                {canEatIt && (<Text style={styles.adviseText}>APTO</Text>)}
                {canEatIt === false && (<Text style={styles.adviseText}>NO APTO</Text>)}
            </View>
        )
    }

    resolveStyle(canEatIt) {
        if(canEatIt === undefined) {
            return undefined
        }
        if(canEatIt === true) {
            return styles.valid
        }
        if(canEatIt === false) {
            return styles.invalid
        }
    }
}