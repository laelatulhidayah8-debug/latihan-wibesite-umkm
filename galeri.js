const cards = document.querySelectorAll(".card");
  const tampilkanNamaProduk = (card) => {
  const namaProduk = card.querySelector("p").textContent;
  let output = card.querySelector(".output");

  if (!output) {
    output = document.createElement("div");
    output.classList.add("output");
    card.appendChild(output);
  }

  output.textContent = `Nama Produk: ${namaProduk}`;
};

cards.forEach((card) => {
  const img = card.querySelector("img");
  img.addEventListener("click", () => tampilkanNamaProduk(card));

  card.addEventListener("mouseenter", () => {
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hovered");
  });
});
