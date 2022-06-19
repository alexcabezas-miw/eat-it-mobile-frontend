import HttpService from "../HttpService";
import ProductService from "../products/ProductsService"

const BASE_URL = "http://192.168.1.44:8080" // FIXME: Replace with prod url when final version is release

export default class ShoppingCartService {
    constructor() {
        this.httpService = new HttpService()
        this.productService = new ProductService()
    }

    async listItems(callback) {
        try {
            const shoppingListBarcodes = await this.httpService.get(BASE_URL + `/shoppingcart/items`)
            const shoppingListProducts = []
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
}