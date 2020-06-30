let showModalUser = document.getElementById("showModalUser")
let hideModalUser = document.getElementById("hideModalUser") 
let modalUser = document.getElementById("modalUser")

showModalUser.addEventListener("click" , () => {
    modalUser.style.display = "block"
})

hideModalUser.addEventListener("click" , () => {
    modalUser.style.display = "none";
})

// Диалоговое окно показать/убрать

let showModalUserReg = document.getElementById("showModalUserReg")
let modalUserReg = document.getElementById("modalUserReg")
let hideModalUserReg = document.getElementById("hideModalUserReg")

showModalUserReg.addEventListener("click" , () => {
    modalUserReg.style.display = "block"
    modalUser.style.display = "none";
}) 

hideModalUserReg.addEventListener("click" , () => {
    modalUserReg.style.display = "none";
})