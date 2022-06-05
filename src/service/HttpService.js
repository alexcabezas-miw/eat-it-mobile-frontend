import CredentialsProviderService from "./CredentialsProviderService";


export default class HttpService {

    async get(url) {
        try {
            const basicAuth = CredentialsProviderService.getInstance().getApplicationCredentials();
            const request = await fetch(url, {
                headers: new Headers({
                    'Authorization': basicAuth
                })
            })
            return await request.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}