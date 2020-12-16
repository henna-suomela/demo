function priceCalculator() {

    var price = document.getElementById("priceBefore").value;
    var percentage = document.getElementById("discountPercentage").value;
    var discount = price * (percentage / 100);

    document.getElementById("newPrice").innerHTML = Math.floor(price -discount);
    document.getElementById("discount").innerHTML = Math.floor(discount);

}