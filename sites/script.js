window.onload = function () {

    //nav bar
    const btn = document.getElementById("btn");
    const nav = document.getElementById("nav");

    btn.addEventListener("click", () => {
        nav.classList.toggle("active");
        btn.classList.toggle("active");
    });

    //dark theme
    //const toggle = document.getElementById("toggle");

    //toggle.addEventListener("change", (e) => {
    //    document.body.classList.toggle("dark", e.target.checked);
    //});


    //new and improved dark theme that i 100% did not steal
    const switchtheme = document.querySelector(".switch-toggle");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.add("dark-theme");
    }

    switchtheme.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        var theme = "light";
        if (document.body.classList.contains("dark-theme")) {
            theme = "dark";
        }
        localStorage.setItem("theme", theme);
    });

    function save() {
        var checkbox = document.getElementById('checkbox');
        localStorage.setItem('checkbox', checkbox.checked);
    }

    function load() {
        var checked = JSON.parse(localStorage.getItem('checkbox'));
        document.getElementById("checkbox").checked = checked;
    }

    checkbox.addEventListener("click", () => {
        save()
    });

    load();
};