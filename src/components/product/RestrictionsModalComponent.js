import React, { Component } from 'react'
import ProductService from '../../service/products/ProductsService'
import Modal from "react-native-modal";
import { View, Text, ActivityIndicator} from 'react-native';
import Button from '../auth/Button';
import RestrictionElement from './RestrictionElement';



export default class RestrictionsModalComponent extends Component {

    constructor(props) {
        super(props)
        this.productService = new ProductService()
        this.state = {
            availableRestrictions: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        this.productService.getAllRestrictions((error, restrictions) => {
          if(error) {
            alert("Restricciones no disponibles en este momento")
          } else {
            this.setState({availableRestrictions: restrictions})
          }
          this.setState({isLoading: false})
        })
    }

    render() {
        const {selectedItems} = this.props;
        return (
            <Modal isVisible={this.props.isVisible}>
                  <View style={{backgroundColor: 'white', padding: 15, borderRadius: 10, paddingTop: 30}}>
                    <Text style={{fontSize: 20}}>Restricciones disponibles: </Text>
                    {this.state.isLoading && <ActivityIndicator/>}
                    {!this.state.isLoading && <View>
                      {this.state.availableRestrictions.map((restriction, index) => (<RestrictionElement key={index} restriction={restriction} selectedItems={selectedItems}/>))}
                    </View>}
                    <Button mode="contained" onPress={this.props.onCancelButton}>Cerrar</Button>
                  </View>
            </Modal>
        )
    }
}