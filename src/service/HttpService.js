import CredentialsProviderService from "./CredentialsProviderService";


export default class HttpService {

    async get(url) {
        try {
            let basicAuth = CredentialsProviderService.getInstance().getApplicationCredentials();
            if(!basicAuth) {
                basicAuth = CredentialsProviderService.getInstance().getAppSpecialUser();
            }
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

    async postWithoutAuthentication(url, content) {
        try {
            const request = await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify(content) 
            })
            return await request.text()
        } catch(error) {
            throw error;
        }
    }

    async post(url, content, credentials) {
        try {
            const request = await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': credentials
                }),
                body: JSON.stringify(content) 
            })
            if(request.status != 201) {
                return {status: request.status}
            }
            return await request.text()
        } catch(error) {
            throw error;
        }
    }

    async postContent(url, content) {
        try {
            let basicAuth = CredentialsProviderService.getInstance().getApplicationCredentials();
            if(!basicAuth) {
                basicAuth = CredentialsProviderService.getInstance().getAppSpecialUser();
            }
            const request = await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'Authorization': basicAuth,
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify(content)
            })
            return await request.json()
        } catch(error) {
            throw error;
        }
    }

    async put(url) {
        try {
            let basicAuth = CredentialsProviderService.getInstance().getApplicationCredentials();
            if(!basicAuth) {
                basicAuth = CredentialsProviderService.getInstance().getAppSpecialUser();
            }
            const request = await fetch(url, {
                method: 'PUT',
                headers: new Headers({
                    'Authorization': basicAuth
                }),
            })
            return await request.text()
        } catch(error) {
            throw error;
        }
    }

    async delete(url) {
        try {
            let basicAuth = CredentialsProviderService.getInstance().getApplicationCredentials();
            if(!basicAuth) {
                basicAuth = CredentialsProviderService.getInstance().getAppSpecialUser();
            }
            const request = await fetch(url, {
                method: 'DELETE',
                headers: new Headers({
                    'Authorization': basicAuth
                }),
            })
            return await request.text()
        } catch(error) {
            throw error;
        }
    }
}