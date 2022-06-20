import React, { Component } from 'react'
import { Card } from 'react-native-elements'
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'

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
    scroll: {
        backgroundColor: '#FFF',
        height: "100%"
    },
})

class Profile extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <ProfileHeaderComponent {...this.props} />
                    <ProfileInformationComponent {...this.props} />
                </View>
            </ScrollView>
        )
    }
}

export default Profile