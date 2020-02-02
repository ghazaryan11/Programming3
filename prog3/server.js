const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const fs = require('fs')

app.use(express.static('.'))

let coordinates = []
io.on('connection', function (socket) {
    const jsonRead = fs.readFileSync('coordinates.json').toString()
    const jsoncoordinates = JSON.parse(jsonRead)

    jsoncoordinates.map((item) => {
        console.log(socket.emit('take_coordinates',item))
    })

    socket.on('sand_coordinates', function (data) {
        let newItem = {
            x: data.x,
            y: data.y
        }
        coordinates.push(newItem)
        io.sockets.emit('take_coordinates', newItem)
        fs.writeFileSync('coordinates.json', JSON.stringify(coordinates))
    })
})

app.get('/', function (res, req) {
    res.redirect('index.html')
})

server.listen(3000)