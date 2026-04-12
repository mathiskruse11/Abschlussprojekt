let total = 0;

function addItemToOrder(name, price) {
  total = total + price;
  console.log(name + " wurde für " + price + " € der Bestellung hinzugefügt");
  console.log("Der Gesamtpreis beträgt: " + total + " €");

  const order = document.createElement("p");
  order.innerHTML =
    name + ": " + price + " €" + "<br />" + "<br />" + "<hr />" + "<br />";
  document.getElementById("orders").appendChild(order);

  showAmmount();
}

function showAmmount() {
  var element = document.getElementById("total-price");
  element.innerHTML = total + " €";
}
