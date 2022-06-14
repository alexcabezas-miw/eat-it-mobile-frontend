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
            console.log(applicationCredentialUser)
            await this.httpService.post(BASE_URL + `/users`, user, applicationCredentialUser)
            callback(null)
        } catch (error) {
            callback("¡El usuario ya existe!")
        }
    }
}