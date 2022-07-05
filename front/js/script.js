let canapeData = [];

const fetchCanape = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((promise) => {
        canapeData = promise;
        console.log(canapeData);
    });
};

const canapeDisplay = async () => {
    await fetchCanape();

    document.getElementById("items").innerHTML = canapeData.map(
        (canape) => `
    <a class="productLink" id="${canape._id}">
    <article>
    <div id="items${canape._id}"></div>
    <h3> ${canape.name}</h3>
    <img src="${canape.imageUrl}" alt="image de canape ${canape.name}"</img>
    <p> ${canape.description}</p>
    </article>
    </a>
    `).join("");

    let a = document.querySelectorAll(".productLink");
    console.log(a);

    a.forEach((canape) => 
    canape.addEventListener("click" , () => {
        console.log(canape);

        window.location = `product.html?${canape.id}`;
    })
    )
};

canapeDisplay();