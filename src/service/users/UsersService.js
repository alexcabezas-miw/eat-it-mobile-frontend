const BASE_URL = "http://192.168.1.51:8080"

export default class UsersService {


    // TODO: refactor
    async getUserByUsername(userName, callback) {
        try {
            const basicAuth = "Basic YWNhYmV6YXM6MTIzNDU=" // TODO: This token should come from a store...
            const userRequest = await fetch(BASE_URL + `/users/${userName}`, {
                headers: new Headers({
                    'Authorization': basicAuth
                })
            })
            const user = await userRequest.json()
            callback(null, user)
        } catch (error) {
            callback(error, null)
        }
    }
}