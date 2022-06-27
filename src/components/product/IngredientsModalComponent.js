import React, { Component } from 'react'
import ProductService from '../../service/products/ProductsService'
import Modal from "react-native-modal";
import { View, Text, ActivityIndicator, ScrollView} from 'react-native';
import Button from '../auth/Button';
import IngredientCheckableComponent from './IngredientCheckableComponent';
import SearchBar from "react-native-dynamic-search-bar";



export default class IngredientsModalComponent extends Component {

    constructor(props) {
        super(props)
        this.productService = new ProductService()
        this.state = {
            isLoading: false,
            ingredientResult: []
        }
    }

    handleSearchIngredient(ingredientName) {
        this.setState({isLoading: true})
        this.productService.getIngredientsByName(ingredientName, (err, ingredients) => {
            if(err) {
                alert("Error inesperado mientras se obtenían los ingredientes")
            }
            else {
                this.setState({ingredientResult: ingredients})
            }
            this.setState({isLoading: false})

        })
    }

    render() {
        const {selectedItems} = this.props;
        return (
            <Modal isVisible={this.props.isVisible}>
                  <View style={{backgroundColor: 'white', padding: 15, borderRadius: 10, paddingTop: 30}}>
                    <SearchBar
                        style={{ marginBottom: 10 }}
                        placeholder="Encuentra el ingrediente"
                        onEndEditing={(event) => this.handleSearchIngredient(event.nativeEvent.text)}
                        onClearPress={() => this.setState({ingredientResult: []})}
                        fontSize={20}
                        name="SearchBar"
                    />
                    {this.state.isLoading && <ActivityIndicator/>}
                    {!this.state.isLoading && <ScrollView>
                      {this.state.ingredientResult.map((ingredient, index) => (<IngredientCheckableComponent key={index} ingredient={ingredient} selectedItems={selectedItems}/>))}
                    </ScrollView>}
                    <Button mode="contained" onPress={this.props.onCancelButton}>Cerrar</Button>
                  </View>
            </Modal>
        )
    }
}