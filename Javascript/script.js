var ctx, wromX, wormImage, wormVX = 0, wormY = 400, wormVY = 0, wormAY = 0;

function init() {

    var canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");

    wormImg = document.getElementById("wormImg");

    wormX = 200;

    window.setInterval(update, 20);
}

function update() {
    
    wormX = wormX + wormVX;
    wormY = wormY + wormVY;
    wormVY = wormVY + wormAY;
    
    if(wormY >= 400){
        
        wormVY = 0;
        
    }
    
    ctx.clearRect(0, 0, 800, 500)
    ctx.drawImage(wormImg, wormX, wormY, 100, 80);

}

function keyDown(e) {
    //console.log(e.keyCode);
    if (e.keyCode == 65) {
        //A
        wormVX = -1;
    }

    if (e.keyCode == 68) {
        //D
        wormVX = 1;

    }
    
    if(e.keyCode == 32){
        //Space
        wormVY = -2;
        wormAY = 0.05;
        
    }
}

function keyUp(e) {
    //console.log(e.keyCode);
    if (e.keyCode == 65) {
        //A
        wormVX = 0;
    }

    if (e.keyCode == 68) {
        //D
        wormVX = 0;

    }
}