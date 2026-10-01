const description = document.getElementById("description");
const amount = document.getElementById("amount");
const button = document.getElementById("addButton");
const transactions = document.getElementById("transactions");
const balance = document.getElementById("balance");
const type = document.getElementById("type");
const message = document.getElementById("message");

let balanceValue = 0;
button.addEventListener("click", function() {
        const descriptionText = description.value;
        if (descriptionText === "") {
            message.textContent = "Please enter a description.";
            return;
        }
        const amountValue = Number(amount.value);
        if (amountValue <= 0) {
            message.textContent = "Please enter an amount greater than 0.";
            return;
        }
        const typeValue = type.value;
        message.textContent = "";
        
        if (typeValue === "income") {
            balanceValue = balanceValue + amountValue
            //add money

        }else{
            balanceValue = balanceValue - amountValue
            //subtract money

        }
        balance.textContent = "$" + balanceValue;
        
    
        console.log(descriptionText);
        console.log(amountValue);
        console.log(typeValue);

        const newTransaction = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            newTransaction.remove();
        
            if (typeValue === "income") {
                balanceValue = balanceValue - amountValue;
            } else {
                balanceValue = balanceValue + amountValue;
            }
        
            balance.textContent = "$" + balanceValue;
        });

        if (typeValue === "income") {
            newTransaction.style.color = "green"
        }else {
            newTransaction.style.color = "red"
        }

        newTransaction.textContent = descriptionText + " - $" + amountValue;

        newTransaction.appendChild(deleteButton);
        

        transactions.appendChild(newTransaction);



    });