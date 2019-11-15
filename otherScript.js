var request = new XMLHttpRequest();

function fireAPI() {
    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.setRequestHeader('Accept', 'application/json'); // setting format response as json
    request.onload = function () {
        // Begin accessing JSON data here
        data = JSON.parse(request.response)
        console.log(data.message)
    }
    request.send()
    document.getElementById("imageurl").setAttribute('src',data.message)
}

