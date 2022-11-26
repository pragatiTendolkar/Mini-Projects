let count = 0;
saveCount = 0;
function increment() {

    count = count + 1;
    console.log(count);
    document.getElementById("count-el").innerText = count;

}

function save() {

    saveCount += count + " - ";
    document.getElementById("save-el").innerText = saveCount;

}
