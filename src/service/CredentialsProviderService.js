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

    getAppSpecialUser() {
        return "Basic ZWF0LWl0LWFwcDoxMjM0NQ=="
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new CredentialsProviderService()
        }
        return this.instance;
    }

}