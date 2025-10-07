window.addEventListener('scroll', function () {
    const header = document.getElementById('header-bar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


//////////////////////////////




var divisorA = document.getElementById("divisorA"),
    handleA = document.getElementById("handleA"),
    sliderA = document.getElementById("sliderA");

function moveDivisorA() {
    handleA.style.left = sliderA.value + "%";
    divisorA.style.width = sliderA.value + "%";
}

var divisorB = document.getElementById("divisorB"),
    handleB = document.getElementById("handleB"),
    sliderB = document.getElementById("sliderB");

function moveDivisorB() {
    handleB.style.left = sliderB.value + "%";
    divisorB.style.width = sliderB.value + "%";
}

var divisorC = document.getElementById("divisorC"),
    handleC = document.getElementById("handleC"),
    sliderC = document.getElementById("sliderC");

function moveDivisorC() {
    handleC.style.left = sliderC.value + "%";
    divisorC.style.width = sliderC.value + "%";
}

window.onload = function () {
    moveDivisorA();
    moveDivisorB();
    moveDivisorC();
};


///////////////////////////////////////////
const accordionBtns = document.querySelectorAll(".faq-box");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        let icon = this.querySelector(".plus-icon");

        if (content.style.maxHeight && content.style.maxHeight !== "0px") {
            // Accordion is open, so close it
            content.style.maxHeight = "0px";
            if (icon) icon.src = "./images/plus-icon.png";
        } else {
            // Accordion is closed, so open it
            content.style.maxHeight = content.scrollHeight + "px";
            if (icon) icon.src = "./images/minus-icon.png";
        }
    };
});
