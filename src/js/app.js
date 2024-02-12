const pfizerItems = [];
const merckAndCoItems = [];
const abbvieItems = [];
const otherItems = [];

// SELECTING ELEMENTS FROM THE DOM

const medicineForm = document.querySelector('.medicine-form');

const productName = document.querySelector('.product-name');
const productID = document.querySelector('.product-id');
const manufacturer = document.querySelector('.manufacturer');
const expirationDate = document.querySelector('.expiration-date');
const quantity = document.querySelector('.quantity');

const submitButton = document.querySelector('.submit-button');


// ADDING EVENT LISTENERS
// when clicking "register medicine" button
medicineForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newItem;
    if (manufacturer.value === 'pfizer') {
        newItem =  new ProductItem (
            productName.value,
            productID.value,
            manufacturer.value,
            expirationDate.value,
            quantity.value
        )
    } else if (manufacturer.value === 'merck-and-co'){

    }
   
    ProductItem.addProductItem(newItem);
    console.log(items);
})


// DECLARE PRODUCT CLASS

class ProductItem {
    constructor(productName, productID, manufacturer, expirationDate, quantity) {
        this.productName = productName;
        this.productID = productID;
        this.manufacturer = manufacturer;
        this.expirationDate = expirationDate;
        this.quantity = quantity;
    }
    static addProductItem(item) {
        if (ProductItem.manufacturer === 'pfizer') {
            pfizerItems.push(item);
        } else if (ProductItem.manufacturer === 'merck-and-co'){
            merckAndCoItems.push(item);
        } else if (ProductItem.manufacturer === 'abbvie') {
            abbvieItems.push(item);
        } else {
            otherItems.push(item);
        }
    };
};

/*class pfizerItem {
    constructor(productName, productID, manufacturer, expirationDate, quantity)
        super(productName, productID, manufacturer, expirationDate, quantity);
}*/

// DECLARE UI CLASS 

class UI {
    static activeTab = '';
}