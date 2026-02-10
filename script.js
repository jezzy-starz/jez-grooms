const checkboxes = document.querySelectorAll(".checkbox-group input");
const receipt = document.getElementById("receipt");
const receiptItems = document.getElementById("receiptItems");
const finalTotal = document.getElementById("finalTotal");
const totalField = document.getElementById("totalField");
const paymentMethod = document.getElementById("paymentMethod");
const yocoBox = document.getElementById("yocoBox");

paymentMethod.addEventListener("change", () => {
  yocoBox.style.display = paymentMethod.value === "now" ? "block" : "none";
});

document.getElementById("bookingForm").addEventListener("submit", e => {
  receiptItems.innerHTML = "";
  let total = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) {
      total += Number(cb.value);
      receiptItems.innerHTML += `<p>${cb.dataset.name} - R${cb.value}</p>`;
    }
  });

  finalTotal.innerHTML = `Total: R${total}`;
  totalField.value = total;

  receipt.style.display = "block";
});