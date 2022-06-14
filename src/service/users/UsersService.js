import CredentialsProviderService from "../CredentialsProviderService";
import HttpService from "../HttpService";

const BASE_URL = "http://192.168.1.44:8080" // FIXME: Replace with prod url when final version is release

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
                    callback({status: 500, errorMessage: "¡Error inesperado!"})
                }
            }
            else {
                callback(null)
            }
        } catch (error) {
            callback({status: 500, errorMessage: "Error inesperado"})
        }
    }
}