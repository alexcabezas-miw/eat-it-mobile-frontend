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

    async post(url, content) {
        try {
            const request = await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(content) 
            })
            return await request.text()
        } catch(error) {
            throw error;
        }
    }
}