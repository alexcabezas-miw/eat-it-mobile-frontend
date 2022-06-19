import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';


import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import ShoppingCartService from '../../service/shoppingcart/ShoppingCartService';


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        fontSize: 35,
        padding: 10,
        justifyContent: 'flex-start'
    },
    apto: {
        backgroundColor: 'green'
    },
    previewImage: {
        borderColor: '#FFF',
        borderWidth: 3,
        height: 100,
        width: 100,
    },
    previewTextContainer: {
        width: 170,
        marginLeft: 10
    },
    previewText: {
        fontSize: 22,

    },
})

export default class ProductPreviewItem extends Component {
    constructor(props) {
        super(props)
        this.shoppingCartService = new ShoppingCartService()
    }

    render() {
        const { data } = this.props
        return (
            <TouchableOpacity onPress={() => this.handleGoToProductView(data)}>
                <View style={[styles.container]}>
                    <View>
                        <Image
                            style={styles.previewImage}
                            source={{ uri: data.image ? data.image : 'https://cajasgraf.com.ar/productos/images/df.jpg' }}
                        />
                    </View>
                    <View style={styles.previewTextContainer}>
                        <Text style={styles.previewText}>{data.name}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.addProductToShoppingCart(data.barcode)}>
                        <Ionicons name="cart" color={'grey'} size={35} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            
        )
    }

    handleGoToProductView(product) {
        this.props.navigation.navigate('Product', { barcode: product.barcode })
    }

    addProductToShoppingCart(barcode) {
        this.shoppingCartService.addProductToShoppingCart(barcode, (err) => {
            if(err) {
                alert(err)
            } else {
                alert("¡El producto ha sido añadido a la cesta!")
            }
        })
    }
}