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

const pfizerUl = document.querySelector('.pfizer-list');
const merckAndCoUl = document.querySelector('.merck-and-co-list');
const abbvieUl = document.querySelector('.abbvie-list');
const otherUl = document.querySelector('.other-list');

const selectManufacturerOption = document.querySelector('.select-manufacturer');
const displayManufacturerButton = document.querySelector('.display-manufacturer-button');

// const submitButton = document.querySelector('.submit-button');


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

// when clicking on the "display manufacturer" button

displayManufacturerButton.addEventListener('click', ()=> {
    if (selectManufacturerOption.value === 'pfizer') {
        UI.activeTab = 'pfizer';
    } else if (selectManufacturerOption.value === 'merck-and-co') {
        UI.activeTab = 'merck-and-co';
    } else if (selectManufacturerOption.value === 'abbvie') {
        UI.activeTab = 'abbvie';
    } else {
        UI.activeTab = 'other';
    }
});


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
            pfizerItems.forEach((item) => {
                const liRow = document.createElement('li');
                
                const renderedProductName = document.createElement('span');
                const renderedProductID = document.createElement('span');
                const renderedManufacturer = document.createElement('span');
                const renderedExpirationDate = document.createElement('span');
                const renderedQuantity = document.createElement('span');
                const deleteButtonContainer = document.createElement('span');

                const deleteButton = document.createElement('span');

                renderedProductName.textContent = item.productName;
                renderedProductID.textContent = item.productID;
                renderedManufacturer.textContent = item.manufacturer;
                renderedExpirationDate.textContent = item.expirationDate;
                renderedQuantity.textContent = item.quantity;
                deleteButton.textContent = 'Delete X';

                liRow.classList.add('pfizer-row');
                deleteButton.classList.add('delete-button');

                liRow.dataset.id = pfizer.ID;

                pfizerUl.append(liRow);
                liRow.append(renderedProductName, renderedProductID, renderedManufacturer, renderedExpirationDate, renderedQuantity);
                deleteButtonContainer.append(deletebutton);

            })
        }
    }

    static renderMerckAndCoItems() {
        displayPfizerContainer.style.display = "none";
        displayMerckAndCoContainer.style.display = "block";
        displayAbbvieContainer.style.display = "none";
        displayOtherContainer.style.display = "none";


        if (UI.activeTab = 'merck-and-co') {

        }
    }
}