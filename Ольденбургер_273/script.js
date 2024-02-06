let url = './data.json';
let json;

let response = await fetch(url);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  json = await response.json();
  console.log(json)
} else {
  alert("Ошибка HTTP: " + response.status);
}

let card_product = document.querySelector(".card_product");
for (let card of json ){
    card_product.innerHTML += `
    <div class = "card">
                    <div><img class="card_img" src="imagles/${card.image}" alt = ""></div>
                    <div><a class="title" href="#">${card.name}</a></div>
                    <p>Цена:${card.price}</p>
                    <button>В корзину</button>
                 </div>`
}
