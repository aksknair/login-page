const button = document.querySelector(".input-group > button");
const input = document.querySelector(".input-group > input");
const icon = document.querySelector(".input-group > button > i");

button.addEventListener("click", () => {
    const type = input.type;

    input.type = type === "text" ? "password" : "text";

    icon.className = type === "text" ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
});
