 var ctx,
     wromX,
     wormImage,
     bananImg,
     wormVX = 0,
     wormY = 400,
     wormVY = 0,
     wormAY = 0,
     bananX = 223123,
     bananY = 123123,
     bananVX = 0,
     bananVY = 0,
     bananAY = 0,
     firePower = 3,
     firePowerV = 0;

 function init() {

     var canvas = document.getElementById("canv");
     ctx = canvas.getContext("2d");

     wormImg = document.getElementById("wormImg");
     bananImg = document.getElementById("bananImg");

     wormX = 200;

     window.setInterval(update, 20);
 }

 function update() {

     wormX = wormX + wormVX;
     wormY = wormY + wormVY;
     wormVY = wormVY + wormAY;

     bananX = bananX + bananVX;
     bananY = bananY + bananVY;
     bananVY = bananVY + bananAY;
     
     firePower = firePower + firePowerV;

     if (wormY >= 400) {

         wormVY = 0;

     }

     ctx.clearRect(0, 0, 800, 500)
     ctx.drawImage(wormImg, wormX, wormY, 100, 80);
     ctx.drawImage(bananImg, wormX - 10, wormY + 30, 40, 40);
     ctx.drawImage(bananImg, bananX, bananY, 20, 20);
     ctx.fillStyle = "red"; 
     ctx.fillRect(wormX - 10, wormY - 13, firePower, 10)

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

     if (e.keyCode == 87) {
         //W hoppa
         wormVY = -2;
         wormAY = 0.05;

     }

     if (e.keyCode == 32) {
         //Space ladda
         firePowerV = 1;
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
     
     if (e.keyCode == 32) {
         //Space skjuta
         bananX = wormX - 10;
         bananY = wormY + 30;
         bananVX = firePower / 10;
         bananVY = firepower / 10;
         bananAY = 0.05;
         firePower = 0;
         firePowerV = 0;
     }
 }