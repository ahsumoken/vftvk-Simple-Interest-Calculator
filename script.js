//Message tonen
function showMessage() {
    document.getElementById("result").style.display = "block";
};

//Rente berekenen 
function compute() {
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    //haalt waarden op vanuit id's

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;

    var today = new Date().getFullYear();
    var yearOfWithdrawal = parseInt(today) + parseInt(years);

    document.getElementById("depositmessage").innerHTML = "" + principal;
    document.getElementById("interestmessage").innerHTML = "" + rate;
    document.getElementById("amountmessage").innerHTML = "" + interest;
    document.getElementById("yearmessage").innerHTML = "" + yearOfWithdrawal;
    showMessage();

    return false;
};
// slider range ophalen en wijzigen
function showRange() {
    var rate = document.getElementById("rate").value;
    document.getElementById("ratevalue").innerHTML = rate;
}
