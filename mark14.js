const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputMsg = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/(initial * quantity))*100;

        msgColor("red");

        showMsg(`Your total Loss is ${loss} by ${lossPercentage.toFixed(2)}%.`);
    }
    else if(initial < current) {
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/(initial * quantity))*100;

        msgColor("green");

        showMsg(`Your total Profit is ${profit} by ${profitPercentage.toFixed(2)}%.`);
    }
    else {
        msgColor("white");
        showMsg(`No pain no gain, No gain no pain!`);
    }
}

function msgColor(color) {
    outputMsg.style.color = color;
}

function showMsg(msg) {
    outputMsg.innerText = msg;
}

function clickHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    if(ip&&qty&&curr) {
        calculateProfitAndLoss(ip, qty, curr);
    }
    else {
        msgColor("white");
        showMsg("Please fill all the details!!");
    }    
}

checkBtn.addEventListener("click", clickHandler);