window.onload = function () {
    const body = document.body;

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

    var button = document.getElementById("about")
    var button2 = document.getElementById("prs")
    var button3 = document.getElementById("eler")
    var button4 = document.getElementById("wip")

    button.onmouseover = function () {
        body.className = 'hoveredabout';
    }
    button2.onmouseover = function () {
        body.className = 'hoveredprs';
    }
    button3.onmouseover = function () {
        body.className = 'hoveredeler';
    }
    button4.onmouseover = function () {
        body.className = 'hoveredwip';
    }

    button.onmouseout = function () {
        body.className = '';
    }
    button2.onmouseout = function () {
        body.className = '';
    }
    button3.onmouseout = function () {
        body.className = '';
    }
    button4.onmouseout = function () {
        body.className = '';
    }

};