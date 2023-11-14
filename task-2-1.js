const url = "https://fakestoreapi.com/products";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let out = "";

    let btn = document.createElement("button");
    btn.classList.add("products_button");
    btn.textContent = "Добавить в корзину";

    for (let i = 0; i < 10; i++) {
      out += '<li><img src="' + data[i].image + '"/>';
      out += data[i].title + "<br>";
      out += "Цена : " + data[i].price + "<br>";
      out += btn.outerHTML + "</li>";
    }
    let content = document.createElement("ul");
    content.innerHTML = out;
    document.getElementById("out").appendChild(content);

  });
