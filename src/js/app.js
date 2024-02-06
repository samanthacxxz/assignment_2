

// SELECTING ELEMENTS FROM THE DOM

const medicineForm = document.querySelector('.medicine-form');

const productName = document.querySelector('.product-name');
const productID = document.querySelector('.product-id');
const manufacturer = document.querySelector('.manufacturer');
const expirationDate = document.querySelector('.expiration-date');
const quantity = document.querySelector('.quantity');


// ADDING EVENT LISTENERS
// when submitting 

// DECLARE PRODUCT CLASS

class ProductItem {
    constructor(productName, productID, manufacturer, expirationDate, quantity) {
        this.productName = productName;
        this.productID = productID;
        this.manufacturer = manufacturer;
        this.expirationDate = expirationDate;
        this.quantity = quantity;
    }
}

class ManufacturerPfizer extends ProductItem {

}