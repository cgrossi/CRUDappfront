function main(){
    // get values user inputs

    const submit = document.getElementById("submit").onclick = sendHome;
    const submitcreate = document.getElementById("submitcreate").onclick = sendRefresh;


    // send as post request
}

function sendRefresh () {
    sendData();
    window.location.reload(true);
}

function sendHome () {
    sendData();
    window.location.href="index.html";

}

function sendData (){
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const request = new XMLHttpRequest();
    request.open("POST", "https://sleepy-hamlet-24092.herokuapp.com/users", false);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify([{name: name.value, email: email.value}]));

    name.value = "";
    email.value = "";
}

main();