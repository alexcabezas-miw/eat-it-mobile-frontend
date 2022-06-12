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
        return "Basic " + base64.encode(this.username + ":" + this.password)
    }

    setCredentials(username, password) {
        this.username = username
        this.password = password
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new CredentialsProviderService()
        }
        return this.instance;
    }

}