import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import { ActivityIndicator } from 'react-native'

import SearchBar from "react-native-dynamic-search-bar";
import ProductPreviewItem from '../product/ProductPreviewItem';
import ProductService from '../../service/products/ProductsService';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    previewItemsContainer: {
        margin: 20,
    }
})


export default class SearchComponent extends Component {

    constructor(props) {
        super(props)
        this.productService = new ProductService()
        this.state = {
            products: [],
            isLoading: false
        }
    }

    render() {
        const { products, isLoading } = this.state;

        return (
            <View style={styles.container}>
                <SearchBar
                    style={{ marginBottom: 10 }}
                    placeholder="Encuentra tu producto"
                    onEndEditing={(event) => this.handleSearchByProduct(event.nativeEvent.text)}
                    fontSize={20}
                    name="SearchBar"
                />
                {
                    isLoading ? (<ActivityIndicator style={{ marginTop: 30 }} />) : (
                        <ScrollView contentContainerStyle={styles.previewItemsContainer}>
                            {
                                products.map((product, i) => (<ProductPreviewItem key={i} data={product} {...this.props} />))
                            }
                        </ScrollView>)
                }
            </View>
        )
    }

    handleSearchByProduct(name) {
        if (!name) return;

        this.setState({ isLoading: true })
        this.productService.getProductsByName(name, (err, products) => {
            if (err) {
                console.log(err)
            }
            else {
                this.setState({ products })
            }
            this.setState({ isLoading: false })
        })
    }
}