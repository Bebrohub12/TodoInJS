let input = document.getElementById("inp1")
let btnAdd = document.querySelector(".btnAdd")
let btnDelete = document.querySelector(".btnDelete")

let liBox = document.getElementById("list-box")

// let arr=[]

btnAdd.onclick = (e) => {
    e.preventDefault()

    let li = document.createElement("li")
    li.innerHTML = `${input.value} <i class="fa-solid fa-pen-to-square" id="edit"></i> <i class="fa-solid fa-trash" id="del"></i>`
    // arr.push([...arr, e.target.value])
    liBox.appendChild(li)
    input.value = ""

    li.querySelector("#del").addEventListener("click", function (event1) {

        li.remove()

    })


    li.querySelector("#edit").addEventListener("click", function (event2) {

        // console.log(li);
        input.value=li.innerHTML

    })

}










































