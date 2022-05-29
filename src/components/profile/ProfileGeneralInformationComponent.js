// Will contain email, age, description, ...

import React, { Component } from 'react'
import {
    Text,
    View,
} from 'react-native'

class ProfileGeneralInformationComponent extends Component {
    render() {
        return (
            <View>
                <Text>Information here!</Text>
            </View>
        )

    }
}

export default ProfileGeneralInformationComponent

/**
 *             < View >
            <View style={[styles.container, containerStyle]}>
                <View style={styles.iconRow}>
                    {index === 0 && (
                        <Icon
                            name="email"
                            underlayColor="transparent"
                            iconStyle={styles.emailIcon}
                        />
                    )}
                </View>
                <View style={styles.emailRow}>
                    <View style={styles.emailColumn}>
                        <Text style={styles.emailText}>{email}</Text>
                    </View>
                    <View style={styles.emailNameColumn}>
                        {name.length !== 0 && (
                            <Text style={styles.emailNameText}>{name}</Text>
                        )}
                    </View>
                </View>
            </View>
            </View >
 */