const myInput1 = document.getElementById("myInput1");
const mySubmit1 = document.getElementById("mySubmit1");
const myVisaCard = document.getElementById("myVisaCard");
const myMasterCard = document.getElementById("myMasterCard");
const myPayPal = document.getElementById("myPayPal");
const myRuPay = document.getElementById("myRuPay");
const myPayment1 = document.getElementById("myPayment1");
const myP1 = document.getElementById("myP1");
const myP2 = document.getElementById("myP2");
const myP3 = document.getElementById("myP3");
const myP4 = document.getElementById("myP4");
const myP5 = document.getElementById("myP5");
const myP6 = document.getElementById("myP6");
const myP7 = document.getElementById("myP7");
const myP8 = document.getElementById("myP8");

let inputAmount;
let discount;
let finalAmount;

mySubmit1.onclick = function(){
    inputAmount = myInput1.value;
    inputAmount = Number(inputAmount);

    if (inputAmount > 0) {
        myP1.textContent = `Your total amount is: ₹${inputAmount}`;
    } else {
        myP1.textContent = `Please enter a valid amount`;
    }

    if(myVisaCard.checked){
        discount = inputAmount >= 1000 ? 8 : 0;
        myP2.textContent = `You are paying from Visa Card in which Discount is ${discount}% (Minimun price to avail ₹1000)`;
    }
    else if(myMasterCard.checked){
        discount = inputAmount >= 1000 ? 8.5 : 0;
        myP2.textContent = `You are paying from Master Card in which Discount is ${discount}% (Minimun price to avail ₹1000)`;
    }
    else if(myPayPal.checked){
        discount = inputAmount >= 1000 ? 7.5 : 0;
        myP2.textContent = `You are paying from Paypal Card in which Discount is ${discount}% (Minimun price to avail ₹1000)`;
    }
    else if(myRuPay.checked){
        discount = inputAmount >= 1000 ? 9 : 0;
        myP2.textContent = `You are paying from Rupay Card in which Discount is ${discount}% (Minimun price to avail ₹1000)`;
    }
    else {
        myP2.textContent = `Please Select your payment method`;
    }

}
myPayment1.onclick = function(){
    inputAmount = myInput1.value;
    inputAmount = Number(inputAmount);

    if(((myVisaCard.checked == true) || (myMasterCard.checked == true) || (myPayPal.checked == true) || (myRuPay.checked == true)) && inputAmount > 0){
        myP3.textContent = `Payment Successful!`
        if(myVisaCard.checked && inputAmount > 0){
            discount = inputAmount >= 1000 ? 8 : 0;
            finalAmount = inputAmount - ((inputAmount*discount)/100);
            myP4.textContent = `Net Amount= ₹${inputAmount}`;
            myP5.textContent = `Discount= ₹${(inputAmount * discount)/100}`;
            myP6.textContent = `Total Amount= ₹${finalAmount}`;
            myP7.textContent = `Paid Through - VisaCard`;
            myP8.textContent = `Thanks for Shopping through Visa.`
        }
        else if(myMasterCard.checked && inputAmount > 0){
            discount = inputAmount >= 1000 ? 8.5 : 0;
            finalAmount = inputAmount - ((inputAmount*discount)/100);
            myP4.textContent = `Net Amount= ₹${inputAmount}`;
            myP5.textContent = `Discount= ₹${(inputAmount * discount)/100}`;
            myP6.textContent = `Total Amount= ₹${finalAmount}`;
            myP7.textContent = `Paid Through - MasterCard`;
            myP8.textContent = `Thanks for Shopping through MasterCard.`
        }
        else if(myPayPal.checked && inputAmount > 0){
            discount = inputAmount >= 1000 ? 7.5 : 0;
            finalAmount = inputAmount - ((inputAmount*discount)/100);
            myP4.textContent = `Net Amount= ₹${inputAmount}`;
            myP5.textContent = `Discount= ₹${(inputAmount * discount)/100}`;
            myP6.textContent = `Total Amount= ₹${finalAmount}`;
            myP7.textContent = `Paid Through - PaypalCard`;
            myP8.textContent = `Thanks for Shopping through Paypal.`
        }
        else if(myRuPay.checked && inputAmount > 0){
            discount = inputAmount >= 1000 ? 9 : 0;
            finalAmount = inputAmount - ((inputAmount*discount)/100);
            myP4.textContent = `Net Amount= ₹${inputAmount}`;
            myP5.textContent = `Discount= ₹${(inputAmount * discount)/100}`;
            myP6.textContent = `Total Amount= ₹${finalAmount}`;
            myP7.textContent = `Paid Through - RupayCard`;
            myP8.textContent = `Thanks for Shopping through RupayCard.`
        }
    }
    else if(((myVisaCard.checked == false) || (myMasterCard.checked == false) || (myPayPal.checked == false) || (myRuPay.checked == false)) && inputAmount > 0){
        myP3.textContent = `Please select your payment method first!`
    }
    else {
        myP3.textContent = `Payment Failed! Please enter a valid amount`
    }
}
