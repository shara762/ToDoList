var inputbox = document.getElementById('input-box');
var data = JSON.parse(localStorage.getItem('data')) || [];
var table = document.getElementsByClassName('table')[0];

if (data.length == 0) {
    table.innerHTML = "<center><h1>No Records Found!!!</h1></center>";
} else
    showTable()

function adddata() {
    // input box .value chi value empty string nsel trcch he function run hoil
    if (inputbox.value !== '') {
        data.push(inputbox.value);
        localStorage.setItem('data', JSON.stringify(data));
        inputbox.value = ""
        showTable()
    }
}


function showTable(selectedIndex = -1) {

    table.innerHTML = ''

    let header = table.createTHead();
    let hrow = header.insertRow();
    let hcell1 = hrow.insertCell(0)
    let hcell2 = hrow.insertCell(1)
    let hcell3 = hrow.insertCell(2)
    let hcell4 = hrow.insertCell(3)
    



    hcell1.innerHTML = ' COUNT';
    hcell2.innerHTML = 'TASK';
    hcell3.innerHTML='EDIT';
    hcell4.innerHTML='DELETE';


    data.map((element, index) => {
        // console.log(element);

        let row = table.insertRow()
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)
        



        cell1.innerHTML = index + 1;

        if (selectedIndex === index)
            cell2.innerHTML = `<input id="newInputbox" placeholder=${element}> </input> <button onclick="save(${index})">save </button>`
        else
            cell2.innerHTML = element;

       
        cell3.innerHTML = `
        <button onclick="editText(${index})"><i class='fas fa-edit btnedit'></i><i class="fa-regular fa-pen-to-square"></i> </button>`

        cell4.innerHTML = `<button onclick="deleteData(${index})"><i class='fas fa-trash-alt'></i> </button>`


    })
}

function deleteData(index) {


    data.splice(index, 1)

    let stringData = JSON.stringify(data)
    localStorage.setItem('data', stringData)

    showTable()
}

function editText(index) {
    // console.log(index);
    showTable(index)
}

function save(index) {
    
    let newData = document.getElementById('newInputbox').value
    data.splice(index, 1, newData)

    localStorage.setItem('data', JSON.stringify(data))
    showTable()
}