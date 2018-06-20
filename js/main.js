function getUsers () {
    const request = new XMLHttpRequest();
    request.open("GET", "https://crud-app-9987.herokuapp.com/users", false);
    request.send();
    return JSON.parse(request.responseText)
}

function createRow (index) {
    const table = document.getElementsByTagName("tbody")[0];

    const row = table.insertRow(index);

    return row;
}

function insertData (row, user) {
    const idCol = row.insertCell(0);
    const nameCol = row.insertCell(1);
    const emailCol = row.insertCell(2);

    idCol.innerHTML = user.id;
    nameCol.innerHTML = user.name;
    emailCol.innerHTML = user.email;
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

