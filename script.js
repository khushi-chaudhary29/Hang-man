// JS List of fruits name
const fruitName = [
    "apple",
    "pomegranate",
    "mango",
    "litchi",
    "banana",
    "guava",
    "strawberry",
    "pineapple",
    "tomato"

]

//Creating a random Fruit name

let randomFruitName = fruitName[Math.floor(Math.random() * fruitName.length)]
let dashes = ""

//0.3*11 = 3.3 = 3
//0.99*11 = 10.89 = 10 //floor and 11 is ceil value

//console.log(randomFruitName)

//Creating a random fruit name
let a = []
let word = []
for (let i = 0; i < randomFruitName.length; i++) {
    a.push(randomFruitName[i])

}
let b = [...a]
//Selecting <ul> </ul> item
for (let i = 0; i < randomFruitName.length; i++) {
    let ulItem = document.querySelector("#guesslist")
    //creating element

    let listElement = document.createElement("li")
    listElement.innerHTML = "_"
    listElement.setAttribute("class", "liItem")

    //adding li item to ul tag

    ulItem.appendChild(listElement)
}

let wrongGuess = 0
let rightGuess = randomFruitName.length

let liArray = document.querySelectorAll(".liItem")
const keys = document.querySelectorAll(".Keys")
keys.forEach((event) => {
    event.addEventListener("click", () => {
        let clicked = event.innerHTML
        if (rightGuess != 0 && wrongGuess < 10) {
            if (a.includes(clicked)) {
                for (let i = 0; i < a.length; i++) {
                    if (a[i] === clicked) {
                        liArray[i].innerHTML = a[i]

                    }
                }
                rightGuess--
            } else {
                wrongGuess++
            }
        }
        event.innerHTML = " "
        event.setAttribute("id", "deleteElement")
        let element = document.querySelector("#deleteElement")
        element.parentNode.removeChild(element)

    })

})

