function budgetMoney(moneyId) {
    const moneyInput= document.getElementById(moneyId)
    const moneyNumber= parseFloat(moneyInput.value);
    if(moneyNumber>0){
        return moneyNumber;
    }
    
}
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
balance.innerText=incomeMoney-parseFloat(totalExpenses)


    
})