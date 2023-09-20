const port = 8081 // the port for the server
const url = "http://localhost:"
const http = require('http')
http.createServer(
    // create callback function
    // with two parameters required for the server
    (req, res) => {
        // send the status code
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        // the request content
        res.write("<h1> Hello World </h1>")
        res.end()
    }
).listen(
    port,
    () => {
        console.log(`Host is running on ${url}${port}`)
    }
); 