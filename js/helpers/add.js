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

const hotelModel = {
    validate: hotel => {
        if (!hotel.nome) throw new Error("Hotel nome required")
        if (!hotel.estrelas) throw new Error("Hotel estrelas required")
        if (!hotel.cidade) throw new Error("Hotel cidade required")
        if (!hotel.diaria) throw new Error("Hotel diaria required")

        return {
            nome: hotel.nome,
            estrelas: hotel.estrelas,
            cidade: hotel.cidade,
            diaria: hotel.diaria,
        }
    }
}

const saveHotel = async () => {

    const hotel = {
        nome: nameInput.value,
        estrelas: estrelasInput.value,
        cidade: cidadeInput.value,
        diaria: diariaInput.value,
    }

    // call the api to save at the db

    try {
        const apiResponse = await fetch("http://localhost:5000/hotel/new", {
            method: "POST",
            body: JSON.stringify(hotel),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        const json = await apiResponse.json();

        console.log(apiResponse)
        console.log(json)

        addHotel(hotel)
    
        resetForm()
        addModal.hide()
    } catch (error) {
        console.log(error)
    }
}

const addHotel = hotel => {
    try {
        const validHotel = hotelModel.validate(hotel)
        hoteis.push(validHotel)

        renderTable(hoteis)
    } catch (error) {
        console.log(error)
    }
}