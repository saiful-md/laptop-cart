function updateProductInput(product,price,isIncreasing){
    const inputProduct =document.getElementById(product + '-number');
    const inputProductText = inputProduct.value;
    let inputProductValue = parseInt(inputProductText);
    if(isIncreasing == true){
        inputProductValue += 1; 
    }
    else if(inputProductValue > 0){
        inputProductValue -= 1; 

    }
    inputProduct.value = inputProductValue;
    const productPrice = document.getElementById(product +  '-price');
    productPrice.innerText = inputProductValue * price;

}
// product input

function getInput(product){
    const productInput = document.getElementById( product + '-number').value;
    const productInputText = parseInt(productInput);
    return productInputText;
}
// tax
function countTotlaPrice(product, price,tax){
    const productPrice = document.getElementById(product + '-price').innerText;
    const productPriceText = parseInt(productPrice);
    const productInput = getInput(product);
    const productPriceTotal = productInput * price;
    const taxAmount = productPriceTotal / 10;
    const taxInput = document.getElementById(tax +'-amount');
    const totalPrice = document.getElementById(product + '-total-price');
    const additionTax = productPriceText + taxAmount;
    taxInput.innerText = taxAmount;
    totalPrice.innerText = additionTax;

}


// product - 1
// increasing 
document.getElementById('plus1-button').addEventListener('click',function(){
    updateProductInput('product1', 300, true);
    countTotlaPrice('product1', 300,'tax1');
})
//decreasing 
document.getElementById('minus1-button').addEventListener('click',function(){
    updateProductInput('product1', 300, false);
    countTotlaPrice('product1', 300,'tax1');

})



// product - 2 
// increasing 
document.getElementById('plus2-button').addEventListener('click',function(){
    updateProductInput('product2', 400, true);
    countTotlaPrice('product2', 400,'tax2');

})
//decreasing 
document.getElementById('minus2-button').addEventListener('click',function(){
    updateProductInput('product2', 400, false);
    countTotlaPrice('product2', 400,'tax2');

})