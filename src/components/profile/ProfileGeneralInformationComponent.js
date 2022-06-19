import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 10
    },
    informationContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    topInformationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        padding: 4,
        marginTop: 5,
    },
    emailColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    emailIcon: {
        color: 'gray',
        fontSize: 30,
    },
    emailRow: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    emailText: {
        fontSize: 16,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

class ProfileGeneralInformationComponent extends Component {
    render() {
        const { gender, age, nationality } = this.props
        return (
            <View style={styles.container}>
                {this.ageWeightHeightView(gender, age, nationality)}
            </View>
        )
    }

    ageWeightHeightView(gender, age, nationality) {
        return (
            <View style={styles.topInformationContainer}>
                <View>
                    <View style={styles.iconRow}>
                        <MaterialIcons
                            name="today"
                            underlayColor="transparent"
                            style={styles.emailIcon}
                        />
                    </View>
                    <View style={styles.emailRow}>
                        <View style={styles.emailColumn}>
                            <Text style={styles.emailText}>{age} Años</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.iconRow}>
                        <MaterialIcons
                            name="face"
                            underlayColor="transparent"
                            style={styles.emailIcon}
                        />
                    </View>
                    <View style={styles.emailRow}>
                        <View style={styles.emailColumn}>
                            <Text style={styles.emailText}>{gender}</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.iconRow}>
                        <MaterialIcons
                            name="flag"
                            underlayColor="transparent"
                            style={styles.emailIcon}
                        />
                    </View>
                    <View style={styles.emailRow}>
                        <View style={styles.emailColumn}>
                            <Text style={styles.emailText}>{nationality}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ProfileGeneralInformationComponent