var xhr = new XMLHttpRequest();
xhr.onload = function () {

    if (xhr.status === 200) {

        var data = JSON.parse(xhr.responseText);
        var products = data.products;
        var container = document.getElementById("products");

        for (var i = 0; i < products.length - 7; i++) {

            var product = products[i];

            var rating = Math.floor(Math.random() * 5) + 1;
            var stars = "";

            for (var j = 1; j <= 5; j++) {
                stars += j <= rating ? "★" : "☆";
            }

            container.innerHTML += `
            <div class="pro">

                <span class="favourite">♡</span>

                <div class="product-image">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <a href="#" class="details" data-id="${product.id}">View Details</a>
                </div>

                <h3>${product.title}</h3>

                <div class="rating">${stars}</div>

                <div class="price">$${product.price}</div>

                <div class="cart-controls">
                    <button class="minus">-</button>
                    <span class="count">1</span>
                    <button class="plus">+</button>

                    <div class="cart">
                        <span class="add-cart">Add to Cart</span>
                    </div>
                </div>

            </div>
            `;
            
        }


        var plusBtns = document.querySelectorAll(".plus");
        var minusBtns = document.querySelectorAll(".minus");

        plusBtns.forEach(function (btn) {

            btn.onclick = function () {

                var counter = btn.parentElement.querySelector(".count");
                var value = parseInt(counter.innerText);
                counter.innerText = value + 1;

            };

        });

        minusBtns.forEach(function (btn) {

            btn.onclick = function () {

                var counter = btn.parentElement.querySelector(".count");
                var value = parseInt(counter.innerText);

                if (value > 1) counter.innerText = value - 1;

            };

        });

    }

};

xhr.open("GET", "https://dummyjson.com/products/category/groceries");
xhr.send();



document.getElementById("products").onclick = function (e) {

    if (e.target.classList.contains("details")) {

        e.preventDefault();

        var id = e.target.getAttribute("data-id");

        fetch("https://dummyjson.com/products/" + id)
            .then(function (res) {
                return res.json();
            })
            .then(function (product) {

                var details = document.getElementById("productDetails");

                details.innerHTML = `

                <div class="modal-layout">

                    <div class="modal-img">
                        <img src="${product.thumbnail}">
                    </div>

                    <div class="modal-info">

                        <h1>${product.title}</h1>

                        <h2>$${product.price}</h2>

                        <p>${product.description}</p>
<div class="cart-controls1">
<button class="min">-</button>

<span class="counts">1</span>

<button class="plu">+</button>
</div>

                        <button class="modal-cart">Add to Cart</button>

                    </div>

                </div>
                `;
                
                  var plusB = document.querySelector(".plu");
       var minusB = document.querySelector(".min");
            plusB.onclick = function () {
                var coun = document.querySelector(".counts");
                var val = parseInt(coun.innerText);
                val++;
                coun.innerText = val;
            }
            minusB.onclick = function () {
                var coun = document.querySelector(".counts");
                var val = parseInt(coun.innerText);
                if (val > 0) {
                    val--;
                    coun.innerText = val;
                }
            }
                document.getElementById("productModal").style.display = "flex";

            });

    }

};

var modal = document.getElementById("productModal");
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};
