function getUsers () {
    const request = new XMLHttpRequest();
    request.open("GET", "https://crud-app-9987.herokuapp.com/users", false);
    request.send();
    return JSON.parse(request.responseText)
}


console.log(getUsers());