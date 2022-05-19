const addButton = document.querySelector("#add");
const addModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

let isModalVisible = false;

const nameInput = document.querySelector("#modal-nome");
const estrelasInput = document.querySelector("#modal-estrelas");
const cidadeInput = document.querySelector("#modal-cidade");
const diariaInput = document.querySelector("#modal-diaria");

addButton.addEventListener("click", async () => {
    addModal.toggle()
})

const resetForm = () => {
    nameInput.value = ""
    estrelasInput.value = ""
    cidadeInput.value = ""
    diariaInput.value = ""
}

const saveHotel = () => {

    // call the api to save at the db

    addHotel({
        nome: nameInput.value,
        estrelas: estrelasInput.value,
        cidade: cidadeInput.value,
        diaria: diariaInput.value,
    })

    resetForm()
    addModal.hide()
}