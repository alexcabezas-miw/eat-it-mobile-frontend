import React, { Component } from 'react'
import { Card } from 'react-native-elements'
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'

import Separator from './shared/SeparatorComponent'
import ProfileHeaderComponent from './profile/ProfileHeaderComponent'
import ProfileInformationComponent from './profile/ProfileInformationComponent'

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    },
    container: {
        flex: 1,
    },
    emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    scroll: {
        backgroundColor: '#FFF',
    },
})

class Contact extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Card containerStyle={styles.cardContainer}>
                        <ProfileHeaderComponent name={this.props.name} avatar={this.props.avatar} />
                        <Separator />
                        <ProfileInformationComponent />
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

export default Contact