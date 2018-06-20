function getUsers () {
    const request = new XMLHttpRequest();
    request.open("GET", "https://crud-app-9987.herokuapp.com/users", false);
    request.send();
    return JSON.parse(request.responseText)
}


function createRow (index) {
    const table = document.getElementsByTagName("tbody")[0];
    return table.insertRow(index);
}


function insertData (row, user) {
    const buttonString = `<button id="del-${user.id}"><span class="fa fa-trash glyphicon glyphicon-trash"></span></button>`;
    const idCol = row.insertCell(0);
    const nameCol = row.insertCell(1);
    const emailCol = row.insertCell(2);

    idCol.innerHTML = buttonString;
    nameCol.innerHTML = user.name;
    emailCol.innerHTML = user.email;

    document.getElementById(`del-${user.id}`).addEventListener("click", function (){deleteRecord(row, user.id); }, false);
}

function deleteRecord (row, userid) {
    row.parentNode.removeChild(row);

    const request = new XMLHttpRequest();
    request.open("DELETE", "https://crud-app-9987.herokuapp.com/users", false);
    request.send(JSON.stringify([{id: userid}]));
}

function main () {
    const users = getUsers();
    let index = 0;
    for (let i = 0; i < users.length; i++) {
        const row = createRow(i);
        const user = users[i];
        insertData(row, user);
    }
}


main();

