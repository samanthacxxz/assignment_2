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

const displayPfizerContainer = document.querySelector('.display-pfizer-container');
const displayMerckAndCoContainer = document.querySelector('.display-merck-and-co-container');
const displayAbbvieContainer = document.querySelector('.display-abbvie-container');
const displayOtherContainer = document.querySelector('.display-other-container');

const submitButton = document.querySelector('.submit-button');


// ADDING EVENT LISTENERS
// when clicking "register medicine" button
medicineForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newItem;
    console.log(manufacturer.value);
    if (manufacturer.value === "pfizer") {
        newItem = new Item (
            productName.value,
            productID.value,
            manufacturer.value,
            expirationDate.value,
            quantity.value
        )
    } else if (manufacturer.value === "merck-and-co"){
        newItem = new MerckAndCoItem (
            productName.value,
            productID.value,
            manufacturer.value,
            expirationDate.value,
            quantity.value
        )
    } else if (manufacturer.value === "abbvie"){
        newItem =  new AbbvieItem (
            productName.value,
            productID.value,
            manufacturer.value,
            expirationDate.value,
            quantity.value
        )
    } else {
        newItem =  new OtherItem (
            productName.value,
            productID.value,
            manufacturer.value,
            expirationDate.value,
            quantity.value
        )
    }
   
    Item.addProductItem(newItem);
    medicineForm.reset();

    console.log(pfizerItems);
    console.log(merckAndCoItems);
    console.log(abbvieItems);
})


// DECLARE PRODUCT CLASS

class Item {
    constructor(productName, productID, manufacturer, expirationDate, quantity) {
        this.productName = productName;
        this.productID = productID;
        this.manufacturer = manufacturer;
        this.expirationDate = expirationDate;
        this.quantity = quantity;
    }
    static addProductItem(item) {
        if (item.manufacturer === 'pfizer') {
            pfizerItems.push(item);
        } else if (Item.manufacturer === 'merck-and-co'){
            merckAndCoItems.push(item);
        } else if (Item.manufacturer === 'abbvie') {
            abbvieItems.push(item);
        } else {
            otherItems.push(item);
        }
    };
};

class MerckAndCoItem extends Item  {
    constructor(productName, productID, manufacturer, expirationDate, quantity){
        super(productName, productID, manufacturer, expirationDate, quantity);
    }

}
class AbbvieItem extends Item  {
    constructor(productName, productID, manufacturer, expirationDate, quantity){
        super(productName, productID, manufacturer, expirationDate, quantity);
    }
}
class OtherItem extends Item  {
    constructor(productName, productID, manufacturer, expirationDate, quantity){
        super(productName, productID, manufacturer, expirationDate, quantity);
    }
}

// DECLARE UI CLASS 

class UI {
    static activeTab = '';
    static renderPfizerItems() {
        displayPfizerContainer.style.display = "block";
        displayMerckAndCoContainer.style.display = "none";
        displayAbbvieContainer.style.display = "none";
        displayOtherContainer.style.display = "none";

        if (UI.activeTab === 'pfizer') {
            items.forEach((item) => {
                const liRow = document.querySelector('li');
                
                const renderedProductName = document.querySelector('li');
                const renderedProductID = document.querySelector('li');
                const renderedManufacturer = document.querySelector('li');
                const renderedExpirationDate = document.querySelector('li');
                const renderedQuantity = document.querySelector('li');
            })
        }
    }
}