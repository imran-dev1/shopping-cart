// Quantity increment decrement
function qtyAdd() {
    const qtyInput = document.getElementById('quantity');
    let qtyInputValue = qtyInput.value;
    qtyInput.value = parseInt(qtyInputValue) + 1;
    const itemPrice = document.getElementById('item-price');
    let itemPriceValue = 1150;
    itemPrice.innerText = itemPriceValue * qtyInput.value;
}
function qtyMinus() {
    let qtyInput = document.getElementById('quantity');
    let qtyInputValue = qtyInput.value;
    if (qtyInputValue>0) {
        qtyInput.value = parseInt(qtyInputValue) - 1;
        const itemPrice = document.getElementById('item-price');
        let itemPriceValue = 1150;
        itemPrice.innerText = itemPriceValue * qtyInput.value;
        itemPriceValue = itemPrice.innerText;

    }
    
}