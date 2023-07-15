let count = 0;

function increment() {
    count +=1;
    document.getElementById("counter").textContent = count;
}

function save() {
    let txt = count + " - ";
    document.getElementById("entries").textContent += txt;
    count = 0;
    document.getElementById("counter").textContent = count;
}