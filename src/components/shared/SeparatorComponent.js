import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    separatorOffset: {
        flex: 2,
        flexDirection: 'row',
    },
    separator: {
        borderColor: '#EDEDED',
        borderWidth: 0.8,
        flex: 8,
        flexDirection: 'row',
    },
})

class SeparatorComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.separatorOffset} />
                <View style={styles.separator} />
            </View>
        )
    }
}

export default SeparatorComponent