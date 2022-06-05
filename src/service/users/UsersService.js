import HttpService from "../HttpService";

const BASE_URL = "http://192.168.1.51:8080" // FIXME: Replace with prod url when final version is release

export default class UsersService {

    constructor() {
        this.httpService = new HttpService()
    }


    // TODO: refactor
    async getUserByUsername(userName, callback) {
        try {
            const user = await this.httpService.get(BASE_URL + `/users/${userName}`)
            callback(null, user)
        } catch (error) {
            callback(error, null)
        }
    }
}