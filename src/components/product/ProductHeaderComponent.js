import React, { Component } from 'react'
import {
    Image,
    ImageBackground,
    Text,
    View,
    StyleSheet
} from 'react-native'

import InsetShadow from 'react-native-inset-shadow'

const styles = StyleSheet.create({
    headerBackgroundImage: {
        paddingTop: 45,
        height: 250,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerContainer: {

    },
    headerColumn: {
        backgroundColor: 'trasparent',
        alignItems: 'center',
        width: "95%"
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.90)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 10,
        fontSize: 35
    },
    emailText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    }
})

export default class ProductHeaderComponent extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { product } = this.props
        return (
            <View style={styles.headerContainer}>
                <InsetShadow shadowRadius={20} shadowOpacity={0.8}>
                    <ImageBackground
                        style={styles.headerBackgroundImage}
                        source={{ uri: product.image ? product.image : 'https://cajasgraf.com.ar/productos/images/df.jpg' }}
                    >
                        <View style={styles.headerColumn}>
                            <Text style={styles.userNameText}>{product.name}</Text>
                        </View>
                    </ImageBackground>
                </InsetShadow>
            </View>
        )
    }
}