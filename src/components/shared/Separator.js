import React, { Component } from 'react'
import { View } from 'react-native'

export default class Separator extends Component {
    render() {
        return (
            <View style={{borderWidth: 1, borderColor: '#d0d0d0', borderStyle:'dashed'}}/>
        )
    }
}

