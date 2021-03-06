import React, { Component } from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions
} from 'react-native'

import ProductHeaderComponent from './product/ProductHeaderComponent'
import ProductAdviseComponent from './product/ProductAdviseComponent'
import ProductInformationComponent from './product/ProductInformationComponent'
import UsersService from '../service/users/UsersService'
import ProductCommentsComponent from './product/ProductCommentsComponent'
import Separator from './shared/Separator'


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        flex: 0.5,
        margin: 0,
        padding: 0,
    },
    infoCardContainer: {
        backgroundColor: '#FFF',
        flexGrow: 1,
        margin: 0,
        padding: 0,
    },
    container: {
        flex: 1
    },
    scroll: {
        backgroundColor: '#FFF',
    },
})

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            canEatIt: undefined,
            blockingIngredients: []
        }
        this.userService = new UsersService()
    }

    componentDidMount() {
        const { product } = this.props
        this.userService.canEatProduct(product.ingredients, (err, response) => {
            if(err) {
                console.error(err)
                alert("Error mientras se determinaba si el alimento podía ser comido o no")
            }
            else {
                this.setState({
                    canEatIt: response.canEatIt,
                    blockingIngredients: response.blockingIngredients
                })
            }
        })
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        <ProductHeaderComponent product={this.props.product} />
                    </View>
                    <View style={styles.infoCardContainer}>
                        <ProductAdviseComponent product={this.props.product} canEatIt={this.state.canEatIt} />
                        <ProductInformationComponent product={this.props.product} blockingIngredients={this.state.blockingIngredients} />
                        <Separator/>
                        <ProductCommentsComponent product={this.props.product}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}