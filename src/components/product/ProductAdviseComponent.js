import React, { Component } from 'react'
import {
    Image,
    ImageBackground,
    Text,
    View,
    StyleSheet
} from 'react-native'


const styles = StyleSheet.create({
    containerValid: {
        flexDirection: 'column',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CAF50',
    },

    containerInvalid: {
        flexDirection: 'column',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
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
        this.state = {
            canEatIt: true,
        }
    }

    render() {
        const { canEatIt } = this.state
        const { product } = this.props

        return (
            canEatIt ?
                (
                    <View style={styles.containerValid}>
                        <Text style={styles.adviseText}>APTO</Text>
                    </View>
                )
                :
                (
                    <View style={styles.containerInvalid}>
                        <Text style={styles.adviseText}>NO APTO</Text>
                    </View>
                )

        )
    }
}