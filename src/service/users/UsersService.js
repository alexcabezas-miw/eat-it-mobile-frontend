import CredentialsProviderService from "../CredentialsProviderService";
import HttpService from "../HttpService";

const BASE_URL = "https://eat-it-users-app.herokuapp.com"

export default class UsersService {

    constructor() {
        this.httpService = new HttpService()
    }

    async getUserByUsername(userName, callback) {
        try {
            const user = await this.httpService.get(BASE_URL + `/users/${userName}`)
            callback(null, user)
        } catch (error) {
            callback(error, null)
        }
    }

    async createUser(user, callback) {
        try {
            const applicationCredentialUser = CredentialsProviderService.getInstance().getAppSpecialUser()
            const response = await this.httpService.post(BASE_URL + `/users`, user, applicationCredentialUser)
            if(response.status) {
                if(response.status == 400) {
                    callback({status: 400, errorMessage: "¡El usuario ya existe!"})
                }
                else {
                    console.log(response.status)
                    callback({status: 500, errorMessage: "¡Error inesperado!"})
                }
            }
            else {
                callback(null)
            }
        } catch (error) {
            console.log(error)
            callback({status: 500, errorMessage: "err"})
        }
    }

    async canEatProduct(ingredients, callback) {
        try {
            const response = await this.httpService.postContent(BASE_URL + `/users/eatit`, {ingredients})
            callback(null, response)
        } catch (error) {
            callback(error, null)
        }
    }
}