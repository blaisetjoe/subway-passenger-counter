let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
console.log(saveEl)
let count = 0

function increment() {
count ++   // same as count = count + 1 or count += 1
countEl.textContent = count 
console.log(count)

}


function save() {
    console.log(count)
}

//Save function 

function save() {
     let countStr = count + " - " 
     saveEl.textContent += countStr
     countEl.textContent = 0
     count = 0

}


