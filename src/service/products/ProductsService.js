import HttpService from "../HttpService";

const BASE_URL = "http://192.168.1.51:8081" // FIXME: Replace with prod url when final version is release

export default class ProductService {

    constructor() {
        this.httpService = new HttpService()
    }

    async getProductByBarcode(barcode, callback) {
        try {
            const product = await this.httpService.get(BASE_URL + `/products/barcode/${barcode}`)
            callback(null, product)
        } catch (error) {
            callback(error, null)
        }
    }

    async getProductsByName(name, callback) {
        try {
            const products = await this.httpService.get(BASE_URL + `/products/name/${name}`)
            callback(null, products)
        } catch (error) {
            callback(error, null)
        }
    }
}