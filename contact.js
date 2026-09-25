let form = document.querySelector("#contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    form.textContent = "Thank you, " + name + "! We will reply soon.";
});