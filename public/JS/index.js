const nav = document.getElementById("nav");
const header = document.getElementById("header");
const address = document.getElementById("address")

header.style.top = `${nav.getBoundingClientRect().height}px`;
window.addEventListener("resize",()=>{
    header.style.top = `${nav.getBoundingClientRect().height}px`;
})
address.addEventListener("click", ()=>{
    header.classList.remove("hidden");
    header.classList.add("flex");
});
address.addEventListener("focusout", ()=>{
    header.classList.remove("flex");
    header.classList.add("hidden");
})