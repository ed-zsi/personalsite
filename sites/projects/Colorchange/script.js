const btn = document.getElementById("btn");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("active")
    if (btn.value == "start") btn.value = "stop";
    else btn.value = "start";
})