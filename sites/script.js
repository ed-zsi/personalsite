window.onload = function () {

    //nav bar
    const btn = document.getElementById("btn");
    const nav = document.getElementById("nav");

    btn.addEventListener("click", () => {
        nav.classList.toggle("active");
        btn.classList.toggle("active");
    });

    //dark theme
    const toggle = document.getElementById("toggle");

    toggle.addEventListener("change", (e) => {
        document.body.classList.toggle("dark", e.target.checked);
    });
};