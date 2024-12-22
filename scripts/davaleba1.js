//ts-chek
month();            // მოხდა ფუნქციის გამოძახება
function month(){               //შეიქმნა ფუნქცია month
    let day = prompt("Enter the day of the month.")    
    day = Number(day)
    let result = "";
    if (day <= 10 && day>0){
     result = "The first decade";   
    }
    else if(day > 10 && day <=20)
        result = "It's the second decade."
    else if (day > 20 && day <=31)
        result = "It's the third decade."
    else{
        result = "Please enter a valid number."
    }
    console.log(result)
}

