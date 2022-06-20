import HttpService from "../HttpService";

const BASE_URL = "https://eat-it-products-app.herokuapp.com"

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

    async getAllRestrictions(callback) {
        try {
            const restrictions = await this.httpService.get(BASE_URL + `/restrictions`)
            callback(null, restrictions)
        } catch(error) {
            callback(error, [])
        }
    }

    async getIngredientsByName(ingredientName, callback) {
        try {
            const ingredients = await this.httpService.get(BASE_URL + `/ingredients/${ingredientName}`)
            callback(null, ingredients)
        } catch(error) {
            callback(error, [])
        }
    }

    async createComment(comment, callback) {
        try {
            await this.httpService.postContent(BASE_URL + `/products/comments/add`, comment)
            callback(null)
        } catch (error) {
            callback(null)
        }
    }
}