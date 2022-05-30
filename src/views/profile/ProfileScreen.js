import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

import UsersService from '../../service/users/UsersService'

import Profile from '../../components/Profile'
import { View } from 'native-base'


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
        this.UsersService.getUserByUsername("acabezas", (err, user) => {
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
                        <ActivityIndicator />
                        :
                        < Profile {...userData} />
                }
            </View>
        )
    }
}


