const orderId = window.location.search.split("?").join("");

console.log(orderId);


document.getElementById("orderId").innerHTML = orderId;