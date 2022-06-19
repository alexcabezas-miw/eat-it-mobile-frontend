import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native'
import ShoppingCartItemPreviewItem from '../../views/shoppingcart/ShoppingCartItemPreviewItem'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import ShoppingCartService from '../../service/shoppingcart/ShoppingCartService';


export default class ShoppingListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            isLoading: false
        }
        this.shoppingCartService = new ShoppingCartService()
    }

    componentDidMount() {
        this.loadItems()
    }

    loadItems() {
        this.setState({isLoading: true})
        this.shoppingCartService.listItems((err, products) => {
            if(err) {
                alert("Error inesperado obteniendo tu lista de productos")
            } else {
                this.setState({products})
            }
            this.setState({isLoading: false})
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.products.length == 0 && this.renderEmptyList()}
                {this.state.products.length != 0 && this.renderList()}
            </View>
        )
    }

    renderEmptyList() {
        return (
            <View style={styles.emptyContainer}>
                <TouchableOpacity onPress={() => this.moveToSearch()}>
                    <Ionicons name="ios-add-circle-outline" color={'grey'} size={50} style={{marginBottom: 10}} />
                </TouchableOpacity>
                <Text style={styles.emptyListText}>¡Vaya! Parece que no has añadido nada</Text>
                <Text style={styles.emptyListText}>¡Pulsa en el icono para empezar a añadir a tu lista de la compra!</Text>
            </View>
        )
    }

    renderList() {
        return (
            <View>
            {this.state.isLoading && <ActivityIndicator/>}
            {!this.state.isLoading && (
                <ScrollView contentContainerStyle={styles.previewItemsContainer}>
                    {this.state.products.map((prod, index) => (<ShoppingCartItemPreviewItem 
                            key={index} data={prod} {...this.props} onDeleteItem={(barcode) => this.removeFromShoppingCart(barcode)}/>
                        ))}
                </ScrollView>
            )}
            </View>
        )
    }

    moveToSearch() {
        this.props.navigation.navigate('MainScreen', { screen: 'Buscar' });
    }

    shouldComponentUpdate() {
        return true
    }

    removeFromShoppingCart(barcode) {
        Alert.alert(
            "¡Cuidado!",
            "¿Deseas borrar el producto de la lista de la compra? Siempre podrás volver a añadirlo",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                {
                    text: "Si",
                    onPress: () => {
                        this.shoppingCartService.removeItemFromShoppingCart(barcode, (err) => {
                            if(err) {
                                alert(err)
                            } else {
                                alert("Producto eliminado correctamente")
                                this.loadItems()
                            }
                        })
                    }
                }
            ]
        );
    }
}

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
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    },
    emptyListText: {
        color: 'grey',
        textAlign: 'center'
    }
})