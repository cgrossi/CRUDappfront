function main(){
    // get values user inputs

    const submit = document.getElementById("submit").onclick = sendData;

    // send as post request
}

function sendData (){
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const request = new XMLHttpRequest();
    request.open("POST", "https://crud-app-9987.herokuapp.com/users", false);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify([{name: name.value, email: email.value}]));

    name.value = "";
    email.value = "";
}

main();