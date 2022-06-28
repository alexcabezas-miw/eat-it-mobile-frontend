import HttpService from "../HttpService";

const BASE_URL = "https://eat-it-auth-app.herokuapp.com"


export default class AuthService {

    constructor() {
        this.httpService = new HttpService()
    }

    async validateCredentials(username, password, callback) {
        try {
            const response = await this.httpService.postWithoutAuthentication(BASE_URL + `/auth`, { username, password })
            callback(null, response === 'true')
        } catch (error) {
            callback(error, null)
        }
    }
}