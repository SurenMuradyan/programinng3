var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs")


app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000,function (){
    console.log("server is run")
    
});


function matrixGenerator(matrixSize, grass,grassEater) {
    var matrix = []
    ////  matrix սարքելու հատված
    for (let i = 0; i < matrixSize; i++) {
            matrix.push([])
            for (let j = 0; j < matrixSize; j++) {
                    matrix[i].push(0)
            }
    }

    // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
    for (let i = 0; i < grass; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 1
    }
     //GrassEater 2

     for (let i = 0; i < grassEater; i++) {
            let x = Math.floor(Math.random() * matrixSize)
            let y = Math.floor(Math.random() * matrixSize)
            matrix[y][x] = 2
    }

   
    return matrix
}

let matrix = matrixGenerator(20, 17,7)

io.socket.emit('send matrix',nkarel)

var grassArr = []
var grassEaterArr = []

Grass = require("./grass")
GrassEater = require("/grassEater")

function createObject(){
    function setup() {
        frameRate(15)
        createCanvas(25 * side, matrix.length * side)


        for (let y = 0; y < matrix.length; y++) {
               for (let x = 0; x < matrix[y].length; x++) {
                       if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                               grassArr.push(grass)


                  } else if(matrix[y][x] == 2){
                           let grEat = new  GrassEater(x,y)
                            grassEaterArr.push(grEat)
                  }

               }
         }
        }
        io.socket.emit('send matrix',nkarel)

    }
