let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");
let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

timeToVisitTabEl.classList.add("d-none");
attractionsTabEl.classList.add("d-none");

function about() {
    aboutButtonEl.style.backgroundColor = "#ffffff";
    timeToVisitButtonEl.style.backgroundColor = "#dae2ec";
    attractionsButtonEl.style.backgroundColor = "#dae2ec";

    aboutTabEl.classList.remove("d-none");
    timeToVisitTabEl.classList.add("d-none");
    attractionsTabEl.classList.add("d-none");

}

function timeToVisit() {
    aboutButtonEl.style.backgroundColor = "#dae2ec";
    timeToVisitButtonEl.style.backgroundColor = "#ffffff";
    attractionsButtonEl.style.backgroundColor = "#dae2ec";

    aboutTabEl.classList.add("d-none");
    timeToVisitTabEl.classList.remove("d-none");
    attractionsTabEl.classList.add("d-none");


}

function attractions() {
    aboutButtonEl.style.backgroundColor = "#dae2ec";
    timeToVisitButtonEl.style.backgroundColor = "#dae2ec";
    attractionsButtonEl.style.backgroundColor = "#ffffff";

    aboutTabEl.classList.add("d-none");
    timeToVisitTabEl.classList.add("d-none");
    attractionsTabEl.classList.remove("d-none");

}