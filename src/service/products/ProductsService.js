const BASE_URL = "http://192.168.1.51:8081"

export default class ProductService {


    // TODO: refactor
    async getProductByBarcode(barcode, callback) {
        try {
            const productRequest = await fetch(BASE_URL + `/products/barcode/${barcode}`)
            const product = await productRequest.json()
            callback(null, product)
        } catch (error) {
            callback(error, null)
        }
    }
}