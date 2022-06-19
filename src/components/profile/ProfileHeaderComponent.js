import React, { Component } from "react"
import {
    Image,
    ImageBackground,
    Text,
    View,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 45,
    },
    headerContainer: {},
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },
    userImage: {
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
    emailText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    }
})

class ProfileHeaderComponent extends Component {

    render() {
        const {
            avatar,
            name,
            username
        } = this.props

        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    blurRadius={10}
                    source={{ uri: avatar ? avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU' }}
                >
                    <View style={styles.headerColumn}>
                        <Image
                            style={styles.userImage}
                            source={{ uri: avatar ? avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU' }}
                        />
                        <Text style={styles.userNameText}>{name}</Text>
                        <Text style={styles.emailText}>@{username}</Text>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default ProfileHeaderComponent;