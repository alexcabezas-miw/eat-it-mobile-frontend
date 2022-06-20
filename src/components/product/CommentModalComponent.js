import React, { Component } from 'react'
import ProductService from '../../service/products/ProductsService'
import Modal from "react-native-modal";
import { View, Text, ActivityIndicator, StyleSheet, TextInput } from 'react-native';
import Button from '../auth/Button';
import { Rating } from 'react-native-ratings';
import CredentialsProviderService from '../../service/CredentialsProviderService';

import { Ionicons } from '@expo/vector-icons';





export default class CommentModalComponent extends Component {

    constructor(props) {
        super(props)
        this.productService = new ProductService()
        this.state = {
            isLoading: false,
            comment: {
                rate: 5,
                content: undefined,
                barcode: this.props.barcode,
            }
        }
    }

    getDate() {
        let date = new Date()
        date.setDate(date.getDate() - 1)
        return date
    }

    handleCreateComment() {
        if(!this.state.comment.content) {
            alert("¡Algo debes de tener que contarnos!")
            return
        }
        
        this.setState({isLoading: true})
        this.productService.createComment(this.state.comment, err => {
            if(err) {
                console.error(err)
                alert("Error inesperado mientras enviábamos tu comentario")
            } else {
                this.setState({comment: {...this.state.comment, createdDate: this.getDate()}})
                this.setState({comment: {...this.state.comment, username: CredentialsProviderService.getInstance().username}})
                this.props.onCommentCreated(this.state.comment)
                this.setState({comment: {
                    rate: 5,
                    content: undefined,
                    barcode: this.props.barcode,
                }})
            }
            this.setState({isLoading: false})
        })
    }

    render() {
        return (
            <Modal isVisible={this.props.isVisible}>
                  <View style={{backgroundColor: 'white', padding: 15, paddingTop: 0, borderRadius: 10, paddingTop: 10}}>
                    <View style={{display: 'flex', alignItems: 'flex-end'}}>
                        <Ionicons name="ios-close" color={'grey'} size={30} style={{marginBottom: 10}} onPress={() => this.props.onCancel()} />
                    </View>
                    {this.state.isLoading && <ActivityIndicator/>}
                    {!this.state.isLoading && this.renderModalContent()}
                    <Button mode="contained" onPress={() => this.handleCreateComment()}>Crear comentario</Button>
                  </View>
            </Modal>
        )
    }

    renderModalContent() {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.rateSection}>
                    <Text style={[styles.textStyle, {marginBottom: 5}]}>¿Qué te parece el producto del 1 al 5?</Text>
                    <Rating
                        ratingCount={5}
                        imageSize={25}
                        startingValue={5}
                        onFinishRating={(rate) => this.setState({comment: {...this.state.comment, rate}})}
                        />
                </View>
                <View>
                    <Text style={styles.textStyle}>¿Qué nos quieres contar?</Text>
                    <TextInput
                        multiline
                        numberOfLines={10}
                        onChangeText={(content) => this.setState({comment: {...this.state.comment, content: content.trim()}})}
                        placeholder="Cuéntanos..."
                        returnKeyType='go'
                        style={styles.contentInputStyle}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    rateSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10
    },

    textStyle: {
        fontSize: 18
    },

    contentInputStyle: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        fontSize: 15,
        height: 100
    }
})