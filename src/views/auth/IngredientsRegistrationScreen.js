import React, { useState } from 'react'
import { Text } from 'react-native'

export default function IngredientsRegistrationScreen({ navigation, ...props }) {
    const {userdata} = props.route.params
    return(
        <Text>HOLA</Text>
    )
}

/*


        userService.createUser(user, err => {
            if(err) {
                setLoading(false)
                if(err.status == 400) {
                  setUsername({...username, error: err.errorMessage})
                }
                else {
                  alert(err.errorMessage)
                }
                return;
            }
            setLoading(false)
            navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
              })
        })

*/