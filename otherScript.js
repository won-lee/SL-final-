var request = new XMLHttpRequest();

function fireAPI() {
    request.open('GET', 'https://api.openbrewerydb.org/breweries')
    request.setRequestHeader('Accept', 'application/json'); // setting format response as json
    request.onload = function () {
        // Begin accessing JSON data here
        data = JSON.parse(request.response)
        console.log(data)
    }
    request.send()
}
function displaydata(){
    document.getElementById("thedata").innerHTML = data
}
