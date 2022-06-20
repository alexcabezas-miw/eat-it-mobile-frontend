import React, { Component } from 'react'
import { View } from 'react-native'
import ProfileGeneralInformationComponent from './ProfileGeneralInformationComponent'
import ProfileIngredientsInformationComponent from './ProfileIngredientsInformationComponent'
import ProfileRestrictionsInformationComponent from './ProfileRestrictionsInformationComponent'

class ProfileInformationComponent extends Component {
    render() {
        return (
            <View>
                <ProfileGeneralInformationComponent {...this.props} />
                <View style={{borderWidth: 1, borderColor: '#d0d0d0', borderStyle:'dashed'}}/>
                <ProfileIngredientsInformationComponent {...this.props} />
                <View style={{borderWidth: 1, borderColor: '#d0d0d0', borderStyle:'dashed'}}/>
                <ProfileRestrictionsInformationComponent {...this.props} />
            </View>
        )
    }
}

export default ProfileInformationComponent
