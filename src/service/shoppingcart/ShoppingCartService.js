import HttpService from "../HttpService";
import ProductService from "../products/ProductsService"

const BASE_URL = "https://eat-it-users-app.herokuapp.com"

export default class ShoppingCartService {
    constructor() {
        this.httpService = new HttpService()
        this.productService = new ProductService()
    }

    async listItems(callback) {
        try {
            const shoppingListBarcodes = await this.httpService.get(BASE_URL + `/shoppingcart/items`)
            const shoppingListProducts = []
            if(shoppingListBarcodes.length == 0) {
                callback(null, [])
            }
            shoppingListBarcodes.forEach(item => {
                this.productService.getProductByBarcode(item.barcode, (err, prod) => {
                    if(err) {
                        throw err
                    }
                    else {
                        shoppingListProducts.push(prod)
                        if(shoppingListProducts.length == shoppingListBarcodes.length) {
                            callback(null, shoppingListProducts)
                        }
                    }
                })
            })
        } catch (error) {
            callback(error, null)
        }
    }

    async removeItemFromShoppingCart(productBarcode, callback) {
        try {
            await this.httpService.delete(BASE_URL + `/shoppingcart/clean/${productBarcode}`)
            callback(null)
        } catch(err) {
            callback(err)
        }
    }

    async clearShoppingCart(callback) {
        try {
            await this.httpService.delete(BASE_URL + `/shoppingcart/clean/`)
            callback(null)
        } catch(err) {
            callback(err)
        }
    }

    async addProductToShoppingCart(productBarcode, callback) {
        try {
            await this.httpService.put(BASE_URL + `/shoppingcart/add/${productBarcode}`)
            callback(null)
        } catch(err) {
            callback(err)
        }
    }
}