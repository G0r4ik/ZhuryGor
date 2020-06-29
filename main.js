let showModalUser = document.getElementById("showModalUser")
let hideModalUser = document.getElementById("hideModalUser") 
let modalUser = document.getElementById("modalUser")

showModalUser.addEventListener("click" , () => {
    modalUser.style.display = "block"
})

hideModalUser.addEventListener("click" , () => {
    modalUser.style.display = "none"
})

// Диалоговое окно показать/убрать