import React, { Component } from 'react'
import { Card } from 'react-native-elements'
import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions
} from 'react-native'

import ProductHeaderComponent from './product/ProductHeaderComponent'
import ProductAdviseComponent from './product/ProductAdviseComponent'
import ProductInformationComponent from './product/ProductInformationComponent'

const height = Dimensions.get('window').height


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
        height
    },
})

export default class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Card containerStyle={styles.cardContainer}>
                        <ProductHeaderComponent product={this.props.product} />
                    </Card>
                    <Card containerStyle={styles.infoCardContainer}>
                        <ProductAdviseComponent product={this.props.product} />
                        <ProductInformationComponent product={this.props.product} />
                    </Card>
                </View>
            </ScrollView>
        )
    }
}