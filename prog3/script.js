const socket = io()
function setup() {
    createCanvas(700, 400);
    background('gray')
}
function mouseDragged() {
    
    fill('blue')
        ellipse(mouseX, mouseY, 20, 20);

    const data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('sand_coordinates', data)
}
function draw(){
    socket.on('take_coordinates', function (data) {
        ellipse(data.x, data.y, 20, 20);
    })
}

window.onload = mouseDragged
