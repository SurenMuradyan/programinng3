var socket = io()


let side = 30
///օբյեկտներ պահելու զանգվածներ





function setup() {
        frameRate(15)
        createCanvas(25 * side, matrix.length * side)


        // for (let y = 0; y < matrix.length; y++) {
        //         for (let x = 0; x < matrix[y].length; x++) {
        //                 if (matrix[y][x] == 1) {
        //                         let grass = new Grass(x, y)

        //                         grassArr.push(grass)


        //                 } else if(matrix[y][x] == 2){
        //                      let grEat = new  GrassEater(x,y)
        //                      grassEaterArr.push(grEat)
        //                 }


        //         }
        // }

}


function nkarel(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if(matrix[y][x] == 2){
                                fill ("yellow")
                        }
                        else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)

                }
        }



                for (let i in grassArr) {
                        grassArr[i].mul()
                }


                for(let i in grassEaterArr){
                        grassEaterArr[i].eat()
                }

 


}

io.socket.emit('send matrix',nkarel)
