import React, { Component } from 'react'
import { View } from 'react-native'
import ProfileGeneralInformationComponent from './ProfileGeneralInformationComponent'

class ProfileInformationComponent extends Component {
    render() {
        // Display the general information and the one related to intolerances, etc
        return (
            <View>
                <ProfileGeneralInformationComponent {...this.props} />
            </View>
        )
    }
}

export default ProfileInformationComponent
