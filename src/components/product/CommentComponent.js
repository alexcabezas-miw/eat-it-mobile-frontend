import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Rating } from 'react-native-ratings';

export default class CommentComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { comment } = this.props
        let displayCreatedDate = undefined
        if(comment.createdDate) {
            displayCreatedDate = new Date(comment.createdDate)
            displayCreatedDate.setDate(displayCreatedDate.getDate() + 1)
            displayCreatedDate = displayCreatedDate.toLocaleDateString("es-ES")
        } 
        
        return (
            <View style={styles.container}>
                <View style={styles.commentHeader}>
                    <Text><Text style={{fontWeight: 'bold'}}>Usuario:</Text> {comment.username}</Text>
                    <Text>{displayCreatedDate}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>Valoración: </Text>
                    <Rating
                        ratingCount={5}
                        imageSize={15}
                        startingValue={comment.rate}
                        readonly={true}
                        />
                </View>
                <Text style={styles.commentContent}>{comment.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'dotted',
        display: 'flex',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        backgroundColor: 'white'
    },

    commentHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    commentContent: {
        textAlign: 'justify',
        fontStyle: 'italic',
        marginTop: 5
    }
})