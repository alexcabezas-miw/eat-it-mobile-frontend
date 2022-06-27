import React, { Component } from 'react'
import { View } from 'react-native'
import Separator from '../shared/Separator'
import ProfileGeneralInformationComponent from './ProfileGeneralInformationComponent'
import ProfileIngredientsInformationComponent from './ProfileIngredientsInformationComponent'
import ProfileRestrictionsInformationComponent from './ProfileRestrictionsInformationComponent'

class ProfileInformationComponent extends Component {
    render() {
        return (
            <View>
                <ProfileGeneralInformationComponent {...this.props} />
                <Separator/>
                <ProfileIngredientsInformationComponent {...this.props} />
                <Separator/>
                <ProfileRestrictionsInformationComponent {...this.props} />
            </View>
        )
    }
}

export default ProfileInformationComponent
