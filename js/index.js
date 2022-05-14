const listButton = document.querySelector("#list");
const contentSection = document.querySelector("#content");

listButton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:5000/hoteis")
    const { hoteis } = await response.json()

    console.log(ListTemplate(hoteis));

    contentSection.innerHTML = ListTemplate(hoteis);
})

const ListTemplate = (hoteis) => {
    // html = `<table style="width:100%; margin-top: 48px; text-align: left;">
    html = `<table class="table" style="color: var(--text-color); margin-top: 48px">
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Estrelas</th>
            <th scope="col">Cidade</th>
            <th scope="col">Diária</th>
        </tr>
    </thead>
    <tbody>
    `

    hoteis.forEach(hotel => {
        html += `
        <tr>
            <td> ${hotel.nome} </td>
            <td> ${hotel.estrelas} </td>
            <td> ${hotel.cidade} </td>
            <td> ${hotel.diaria} </td>
        </tr>`
    })

    html += '</tbody></table>'

    return html
}