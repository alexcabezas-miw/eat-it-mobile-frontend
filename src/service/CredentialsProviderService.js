import base64 from 'react-native-base64'

export default class CredentialsProviderService {

    constructor() {
        this.username = undefined
        this.password = undefined
    }

    getUsername() {
        return this.username
    }

    getApplicationCredentials() {
        if (!this.username || !this.password) {
            return undefined
        }
        return "Basic " + base64.encode(this.username + ":" + this.password)
    }

    setCredentials(username, password) {
        this.username = username
        this.password = password
    }

    getAppSpecialUser() {
        return process.env.USER_APP_CREDENTIALS
    }

    clearCredentials() {
        this.username = undefined
        this.password = undefined
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new CredentialsProviderService()
        }
        return this.instance;
    }

}