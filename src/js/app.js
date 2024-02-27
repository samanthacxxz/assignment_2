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

// GETTING THE DATA FROM LOCAL STORAGE WHEN THE PAGE IS RELOADED

const retrievedPfizerItems = JSON.parse(localStorage.getItem('pfizerItems')) || [];
const retrievedMerckAndCoItems = JSON.parse(localStorage.getItem('merckAndCoItems')) || [];
const retrievedAbbvieItems = JSON.parse(localStorage.getItem('abbvieItems')) || [];
const retrievedOtherItems = JSON.parse(localStorage.getItem('OtherItems')) || [];

document.addEventListener('DOMContentLoaded', () => {
    retrievedPfizerItems.forEach((item) => {
        pfizerItems.push(item);
    });
    console.log(pfizerItems);

    retrievedMerckAndCoItems.forEach((item) => {
        merckAndCoItems.push(item);
    })
    console.log(merckAndCoItems);

    retrievedAbbvieItems.forEach((item) => {
        abbvieItems.push(item);
    })
    console.log(abbvieItems);

    retrievedOtherItems.forEach((item) => {
        otherItems.push(item);
    })
    console.log(otherItems);
});
// ADDING EVENT LISTENERS
// when clicking "register medicine" button

    // create new item
medicineForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newItem;
    console.log(manufacturer.value);
    if (manufacturer.value === "pfizer") {
        newItem = new PfizerItem (
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
   
    PfizerItem.addProductItem(newItem);
    medicineForm.reset();

    console.log(pfizerItems);
    console.log(merckAndCoItems);
    console.log(abbvieItems);
    console.log(otherItems);

    localStorage.setItem('pfizerItems', JSON.stringify(pfizerItems));
    localStorage.setItem('merckAndCoItems', JSON.stringify(merckAndCoItems));
    localStorage.setItem('abbvieItems', JSON.stringify(abbvieItems));
    localStorage.setItem('otherItems', JSON.stringify(otherItems));

})

// when clicking on the "display manufacturer" button

displayManufacturerButton.addEventListener('click', ()=> {
    displaySelectedManufacturer(selectManufacturerOption.value);
});

displaySelectedManufacturer = () => {
    if (selectManufacturerOption.value === 'pfizer') {
        UI.activeTab = 'pfizer';
        UI.renderPfizerItems(pfizerItems);
    } else if (selectManufacturerOption.value === 'merck-and-co') {
        UI.activeTab = 'merck-and-co';
        UI.renderMerckAndCoItems(merckAndCoItems);
    } else if (selectManufacturerOption.value === 'abbvie') {
        UI.activeTab = 'abbvie';
        UI.renderAbbvieItems(abbvieItems);
    } else {
        UI.activeTab = 'other';
        UI.renderOtherItems(otherItems);
    }
}


// DECLARE PRODUCT CLASS

class PfizerItem {
    constructor(productName, productID, manufacturer, expirationDate, quantity) {
        this.productName = productName;
        this.productID = productID;
        this.manufacturer = manufacturer;
        this.expirationDate = expirationDate;
        this.quantity = quantity;
        this.ID = Date.now();

    }
    static addProductItem(item) {
        if (item.manufacturer === 'pfizer') {
            pfizerItems.push(item);
        } else if (item.manufacturer === 'merck-and-co'){
            merckAndCoItems.push(item);
        } else if (item.manufacturer === 'abbvie') {
            abbvieItems.push(item);
        } else {
            otherItems.push(item);
        }
    };

    // delete method

    static deleteItem(id, itemsArray){
        const index = itemsArray.findIndex(item => item.ID.toString() === id.toString());
        if( index !== -1){
            itemsArray.splice(index, 1);
            if (UI.activeTab === 'pfizer'){
                UI.renderPfizerItems(pfizerItems)
            } else if (UI.activeTab === 'merck-and-co') {
                UI.renderMerckAndCoItems(merckAndCoItems)
            } else if (UI.activeTab === 'abbvie') {
                UI.renderAbbvieItems(abbvieItems)
            } else {
                UI.renderOtherItems(otherItems)
            }
        }
      }
};


class MerckAndCoItem extends PfizerItem  {
    constructor(productName, productID, manufacturer, expirationDate, quantity){
        super(productName, productID, manufacturer, expirationDate, quantity);
        this.ID = Date.now();
    }

}
class AbbvieItem extends PfizerItem  {
    constructor(productName, productID, manufacturer, expirationDate, quantity){
        super(productName, productID, manufacturer, expirationDate, quantity);
        this.ID = Date.now();
    }
}
class OtherItem extends PfizerItem  {
    constructor(productName, productID, manufacturer, expirationDate, quantity){
        super(productName, productID, manufacturer, expirationDate, quantity);
        this.ID = Date.now();
    }
}

// DECLARE UI CLASS 

class UI {
    static activeTab = '';

    static renderPfizerItems(pfizerItems) {
        displayPfizerContainer.style.display = "block";
        displayMerckAndCoContainer.style.display = "none";
        displayAbbvieContainer.style.display = "none";
        displayOtherContainer.style.display = "none";

        pfizerUl.textContent = '';

        if (UI.activeTab === 'pfizer') {
            pfizerItems.forEach((pfizer) => {
                const liRow = document.createElement('li');
                
                const renderedProductName = document.createElement('span');
                const renderedProductID = document.createElement('span');
                const renderedManufacturer = document.createElement('span');
                const renderedExpirationDate = document.createElement('span');
                const renderedQuantity = document.createElement('span');
                const deleteButtonContainer = document.createElement('span');

                const deleteButton = document.createElement('button');

                renderedProductName.textContent = pfizer.productName;
                renderedProductID.textContent = pfizer.productID;
                renderedManufacturer.textContent = pfizer.manufacturer;
                renderedExpirationDate.textContent = pfizer.expirationDate;
                renderedQuantity.textContent = pfizer.quantity;
                deleteButton.textContent = 'Delete ❌';

                liRow.classList.add('pfizer-row');
                deleteButton.classList.add('delete-button');

                liRow.dataset.id = pfizer.ID;

                // appending

                pfizerUl.append(liRow);
                liRow.append(renderedProductName, renderedProductID, renderedManufacturer, renderedExpirationDate, renderedQuantity, deleteButtonContainer);
                deleteButtonContainer.append(deleteButton);

                // delete button event

                deleteButton.addEventListener('click', (e)=>{
                    const rowID = e.currentTarget.parentElement.parentElement.dataset.id
                    PfizerItem.deleteItem(rowID, pfizerItems)
                })
            })
        }
    }

    static renderMerckAndCoItems() {
        displayPfizerContainer.style.display = "none";
        displayMerckAndCoContainer.style.display = "block";
        displayAbbvieContainer.style.display = "none";
        displayOtherContainer.style.display = "none";

        merckAndCoUl.textContent = '';

        if (UI.activeTab === 'merck-and-co') {
            merckAndCoItems.forEach((merckAndCo) => {
                const liRow = document.createElement('li');
                
                const renderedProductName = document.createElement('span');
                const renderedProductID = document.createElement('span');
                const renderedManufacturer = document.createElement('span');
                const renderedExpirationDate = document.createElement('span');
                const renderedQuantity = document.createElement('span');
                const deleteButtonContainer = document.createElement('span');

                const deleteButton = document.createElement('button');

                renderedProductName.textContent = merckAndCo.productName;
                renderedProductID.textContent = merckAndCo.productID;
                renderedManufacturer.textContent = merckAndCo.manufacturer;
                renderedExpirationDate.textContent = merckAndCo.expirationDate;
                renderedQuantity.textContent = merckAndCo.quantity;
                deleteButton.textContent = 'Delete ❌';

                liRow.classList.add('merck-and-co-row');
                deleteButton.classList.add('delete-button');

                liRow.dataset.id = merckAndCo.ID;

                merckAndCoUl.append(liRow);
                liRow.append(renderedProductName, renderedProductID, renderedManufacturer, renderedExpirationDate, renderedQuantity, deleteButtonContainer);
                deleteButtonContainer.append(deleteButton);

                deleteButton.addEventListener('click', (e)=>{
                    const rowID = e.currentTarget.parentElement.parentElement.dataset.id
                    PfizerItem.deleteItem(rowID, merckAndCoItems)
                })

            })
        }
    }
    static renderAbbvieItems() {
        displayPfizerContainer.style.display = "none";
        displayMerckAndCoContainer.style.display = "none";
        displayAbbvieContainer.style.display = "block";
        displayOtherContainer.style.display = "none";

        abbvieUl.textContent = '';

        if (UI.activeTab === 'abbvie') {
            abbvieItems.forEach((abbvie) => {
                const liRow = document.createElement('li');
                
                const renderedProductName = document.createElement('span');
                const renderedProductID = document.createElement('span');
                const renderedManufacturer = document.createElement('span');
                const renderedExpirationDate = document.createElement('span');
                const renderedQuantity = document.createElement('span');
                const deleteButtonContainer = document.createElement('span');

                const deleteButton = document.createElement('button');

                renderedProductName.textContent = abbvie.productName;
                renderedProductID.textContent = abbvie.productID;
                renderedManufacturer.textContent = abbvie.manufacturer;
                renderedExpirationDate.textContent = abbvie.expirationDate;
                renderedQuantity.textContent = abbviabbvieeItem.quantity;
                deleteButton.textContent = 'Delete ❌';

                liRow.classList.add('abbvie-row');
                deleteButton.classList.add('delete-button');

                liRow.dataset.id = abbvie.ID;

                abbvieUl.append(liRow);
                liRow.append(renderedProductName, renderedProductID, renderedManufacturer, renderedExpirationDate, renderedQuantity, deleteButtonContainer);
                deleteButtonContainer.append(deleteButton);

                deleteButton.addEventListener('click', (e)=>{
                    const rowID = e.currentTarget.parentElement.parentElement.dataset.id
                    PfizerItem.deleteItem(rowID, abbvieItems)
                })

            })
        }
    }
    static renderOtherItems() {
        displayPfizerContainer.style.display = "none";
        displayMerckAndCoContainer.style.display = "none";
        displayAbbvieContainer.style.display = "none";
        displayOtherContainer.style.display = "block";

        otherUl.textContent = '';

        if (UI.activeTab === 'other') {
            otherItems.forEach((other) => {
                const liRow = document.createElement('li');
                
                const renderedProductName = document.createElement('span');
                const renderedProductID = document.createElement('span');
                const renderedManufacturer = document.createElement('span');
                const renderedExpirationDate = document.createElement('span');
                const renderedQuantity = document.createElement('span');
                const deleteButtonContainer = document.createElement('span');

                const deleteButton = document.createElement('button');

                renderedProductName.textContent = other.productName;
                renderedProductID.textContent = other.productID;
                renderedManufacturer.textContent = other.manufacturer;
                renderedExpirationDate.textContent = other.expirationDate;
                renderedQuantity.textContent = other.quantity;
                deleteButton.textContent = 'Delete ❌';

                liRow.classList.add('other-row');
                deleteButton.classList.add('delete-button');

                liRow.dataset.id = other.ID;

                otherUl.append(liRow);
                liRow.append(renderedProductName, renderedProductID, renderedManufacturer, renderedExpirationDate, renderedQuantity, deleteButtonContainer);
                deleteButtonContainer.append(deleteButton);

                deleteButton.addEventListener('click', (e)=>{
                    const rowID = e.currentTarget.parentElement.parentElement.dataset.id
                    PfizerItem.deleteItem(rowID, otherItems)
                })

            })
        }
    }
}