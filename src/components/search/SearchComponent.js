import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    ActivityIndicator
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


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
    },
    emptyContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60%',
        width: "100%"
    },

    emptyText: {
        color: 'gray',
        textAlign: 'center'
    }
})


export default class SearchComponent extends Component {

    constructor(props) {
        super(props)
        this.productService = new ProductService()
        this.state = {
            products: [],
            isLoading: false,
            searchWasMade: false
        }
    }

    render() {
        const { products, isLoading, searchWasMade } = this.state;
        return (
            <View style={styles.container}>
                <SearchBar
                    style={{ marginBottom: 10 }}
                    placeholder="Encuentra tu producto"
                    onEndEditing={(event) => this.handleSearchByProduct(event.nativeEvent.text)}
                    onClearPress={() => {
                        this.setState({products: []})
                        this.setState({searchWasMade: false})
                    }}
                    fontSize={20}
                    name="SearchBar"
                />
                {isLoading && (<ActivityIndicator style={{ marginTop: 30 }} />)}
                {!isLoading && products.length == 0 && searchWasMade && this.renderEmptyList()}
                {!isLoading && products.length != 0 && this.renderList()}
            </View>
        )
    }

    renderEmptyList() {
        return (
            <View style={styles.emptyContainer}>
                <Ionicons name="ios-sad-outline" color={'grey'} size={50} style={{marginBottom: 10}} />
                <Text style={styles.emptyText}>¡Vaya! Parece que no hemos encontrado ese producto</Text>
                <Text style={styles.emptyText}>¿Seguro que lo has escrito bien?</Text>
            </View>
        )
    }

    renderList() {
        const { products } = this.state;
        return (
            <ScrollView contentContainerStyle={styles.previewItemsContainer}>
                {
                    products.map((product, i) => (<ProductPreviewItem key={i} data={product} {...this.props} />))
                }
            </ScrollView>
        )
    }

    handleSearchByProduct(name) {
        if (!name) return;

        this.setState({searchWasMade: true})
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