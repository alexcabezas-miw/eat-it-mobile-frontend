import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

import UsersService from '../../service/users/UsersService'

import Profile from '../../components/Profile'
import { View } from 'native-base'
import CredentialsProviderService from '../../service/CredentialsProviderService'


export default class ProfileScreen extends Component {

    constructor(props) {
        super(props)
        this.UsersService = new UsersService()
        this.state = {
            userData: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        const username = CredentialsProviderService.getInstance().getUsername()
        this.UsersService.getUserByUsername(username, (err, user) => {
            if (err) {
                console.log(err)
            }
            else {
                this.setState({ userData: user })
            }
            this.setState({ isLoading: false })
        })
    }

    render() {
        const { userData, isLoading } = this.state
        return (
            <View>
                {
                    isLoading ?
                        <ActivityIndicator style={{marginTop: 100}} />
                        :
                        < Profile {...userData} />
                }
            </View>
        )
    }
}


