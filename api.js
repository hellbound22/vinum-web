var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('POST', 'http://18.222.148.185:5000/gen_auth', true)

request.onload = function() {
	console.log(this.response) 
  // Begin accessing JSON data here
}

// Send request
request.send()
