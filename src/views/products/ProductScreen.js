import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

import ProductService from '../../service/products/ProductsService'

import { View } from 'native-base'

import Product from '../../components/Product'


export default class ProfileScreen extends Component {

    constructor(props) {
        super(props)
        this.productsService = new ProductService()
        this.state = {
            userData: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        const { barcode } = this.props.route.params;
        this.productsService.getProductByBarcode(barcode, (err, product) => {
            if (err) {
                console.log(err)
            }
            else {
                this.setState({ productData: product })
            }
            this.setState({ isLoading: false })
        })
    }

    render() {
        const { productData, isLoading } = this.state
        return (
            <View>
                {
                    isLoading ?
                        <ActivityIndicator />
                        :
                        < Product product={productData} />
                }
            </View>
        )
    }
}


