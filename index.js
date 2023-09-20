const connect = require('connect')
const app = connect()


const logWorld = (req, res, next) => {
    console.log(req.method, req.url)
    // this will allow logWorld to run every request
    next()
}
const helloWorld = (req, res, next) => {
    res.setHeader('Content-type', "text/html")
    res.end("<h1> Hello World </h1>")
}
const byeWorld = (req, res, next) => {
    res.setHeader('Content-type', "text/html")
    res.end("<h1> Bye World </h1>")
}
app.use(logWorld)
app.use('/hello', helloWorld)
app.use('/bye', byeWorld)

app.listen(8081)