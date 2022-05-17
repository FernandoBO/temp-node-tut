const http = require('http')

const server = http.createServer((req , res) => {
    if(req.url === '/'){
        res.end('Bienvenido a la página principal')
    }
    if(req.url === '/about'){
        res.end('Está es una paqueña historia')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>No se encontró la página deseada</p>
        <a href="/">Regresar Inicio</a>
    `)
})
server.listen(5000)