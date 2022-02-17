/* ***get input imcome and expenses**** */
function budgetMoney(moneyId) {
    const moneyInput= document.getElementById(moneyId)
    const moneyNumber= parseFloat(moneyInput.value);
    if(moneyNumber>0){
        return moneyNumber;
    }
    
}

/* ***get total exprnses and balance id **** */
function countBalance(balance) {
    const accountOfMoney = document.getElementById(balance);
    return accountOfMoney;
}

document.getElementById('calculate-button').addEventListener('click',function () {
   
const incomeMoney=budgetMoney('income');
const foodCost =budgetMoney('food-cost');
const rentCost=budgetMoney('rent-cost');
const clothesCost=budgetMoney('clothes-cost');
const balance =countBalance('balance');

const totalCost = countBalance('total-expenses')

totalCost.innerText = (foodCost+rentCost+clothesCost);
const totalExpenses=parseFloat(totalCost.innerText);
const textShow=document.getElementById('error-msg')

/* ***error handler**** */
if(totalExpenses<incomeMoney){
balance.innerText=incomeMoney-parseFloat(totalExpenses)
}
else{
    
    
    textShow.style.display='block'
    
}

    
})