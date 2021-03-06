const listButton = document.querySelector("#list");
const contentSection = document.querySelector("#content");

let hoteis = []

listButton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:5000/hoteis")
    const json = await response.json()
    hoteis = json.hoteis

    renderTable(hoteis)
})

const renderTable = hoteis => {
    contentSection.innerHTML = ListTemplate(hoteis);
}

const ListTemplate = (hoteis) => {
    html = `<table class="table" style="color: var(--text-color); margin-top: 48px">
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Estrelas</th>
            <th scope="col">Cidade</th>
            <th scope="col">Diária</th>
            <th scope="col">Ações</th>
        </tr>
    </thead>
    <tbody>
    `

    hoteis.forEach((hotel, index) => {
        html += `
        <tr>
            <td> ${hotel.nome} </td>
            <td> ${hotel.estrelas} </td>
            <td> ${hotel.cidade} </td>
            <td> ${hotel.diaria} </td>
            <td>
                <button
                    onClick="editHotel(${index})"
                    class="btn btn-outline-primary"
                    data-id="${index}"
                >
                    Editar
                </button>
            </td>
        </tr>`
    })

    html += '</tbody></table>'

    return html
}