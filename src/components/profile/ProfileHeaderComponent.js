import { Component } from "react"
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
})

class ProfileHeaderComponent extends Component {

    render() {
        const {
            avatar,
            name,
        } = this.props

        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    blurRadius={10}
                    source={{ uri: avatar }}
                >
                    <View style={styles.headerColumn}>
                        <Image
                            style={styles.userImage}
                            source={{ uri: avatar }}
                        />
                        <Text style={styles.userNameText}>{name}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default ProfileHeaderComponent;