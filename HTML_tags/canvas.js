// load canvas when the widow loads
window.onload = function() {

  // store the canvas and conext in a variable
  var canvas = document.getElementById("sky");
  var ctx = canvas.getContext("2d");

  // set canvas dimensions to window dimensions
  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  // create snow
  var ms = 100; // max snow
  var snow = [];

  // apply attributes to snow with loop
  for(var i = 0; i < ms; i++) {
    snow.push({
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*5+2, // min of 2px, max of 7px
      d: Math.random() + 1 // density of snow
    })
  }

  // draw snow
  Function drawSnow() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for(var i = 0; i < ms; i++) {
      var s = snow[i];
      ctx.moveTo(s.x, s.y);
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveSnow();
  }

  // animate the snow
  var angle = 0;

  function moveSnow() {
    angle += 0.01;
    for(var i = 0; i < ms; i++) {
      //store current snow
      var s = snow[i];

      // update x and y coordinates of each snow
      s.y += Math.pow(s.d, 2) + 1;
      s.x += Math.sin(angle) * 2;

      // when snow hits bottom, create a new one on top
      if(s.y > H) {
        snow[i] = {x: Math.random()*W, y: 0, r: s.r, d: s.d};
      }
    }
  }

  setInterval(drawSnow, 25);
}
