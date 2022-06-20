import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CommentComponent from './CommentComponent'

import AddElementsButton from "../auth/AddElementsButton"
import CommentModalComponent from './CommentModalComponent'

import { Ionicons } from '@expo/vector-icons';



const styles = StyleSheet.create({
    container: {
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
    },

    ingredientsText: {
        fontWeight: 'bold',
        fontSize: 25
    },

    commentsContainer: {
        marginTop: 10,
        flexDirection: 'column',
    },

    emptyContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        width: "100%"
    },

    emptyText: {
        color: 'gray',
        textAlign: 'center'
    }
})

export default class ProductCommentsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            createCommentModalVisible: false
        }
    }

    toggleCreateCommentModal() {
        this.setState({createCommentModalVisible: !this.state.createCommentModalVisible})
    }

    render() {
        let {product} = this.props
        
        return (
            <View style={styles.container}>
                <View style={{display: 'flex', flexDirection: 'row', width: "100%", alignItems: 'center'}}>
                    <Text style={styles.ingredientsText}>Comentarios: </Text>
                    <AddElementsButton
                        label={"Añadir comentario"} 
                        onTouch={() => this.toggleCreateCommentModal()}
                        width={"100%"}
                    />
                </View>
                {product.comments.length == 0 && this.renderEmptyView()}
                {product.comments.length != 0 && this.renderComments()}
                <CommentModalComponent isVisible={this.state.createCommentModalVisible} barcode={product.barcode} 
                    onCancel={() => this.toggleCreateCommentModal()}
                    onCommentCreated={(comment) => {
                        alert("¡El comentario se ha añadido con éxito!")
                        product.comments.push(comment)
                        this.toggleCreateCommentModal()
                }}/>
            </View>
        )
    }

    renderEmptyView() {
        return (
            <View style={styles.emptyContainer}>
                <Ionicons name="ios-sad-outline" color={'grey'} size={50} style={{marginBottom: 10}} />
                <Text style={styles.emptyText}>¡Vaya! Parece que nadie ha comentado por aqui</Text>
                <Text style={styles.emptyText}>¿Por qué no te lanzas?</Text>
            </View>
        )
    }

    renderComments() {
        let {product} = this.props
        return (
            <View style={styles.commentsContainer}>
                {product.comments.map((comment, index) => <CommentComponent key={index} comment={comment}/>)}
            </View>
        )
    }
}