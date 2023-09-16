// Load fonts
require("Font7x11Numeric7Seg").add(Graphics);
// position on screen
let X = 120, Y = 80;
let drawSecondsInterval;


function draw() {
  // work out how to display the current time
  var d = new Date();
  var h = d.getHours()-12, m = d.getMinutes();
  var time = (" "+h).substr(-2) + ":" + m.toString().padStart(2,0);
  // Reset the state of the graphics library
  g.reset();
  // draw the current time (4x size 7 segment)
  g.setFont("7x11Numeric7Seg",4);
  g.setFontAlign(1,1); // align right bottom
  g.drawString(time, X, Y, true /*clear background*/);

    // draw the date, in a normal font
  g.setFont("12x20");
  g.setFontAlign(1,1);

  // pad the date - this clears the background if the date were to change length
  var dateStr = "    "+require("locale").date(d)+"    ";
  g.drawString(dateStr, X+28, Y+30, true /*clear background*/);
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
// now draw every minute
let secondInterval = setInterval(draw, 60000 - (Date.now() % 60000));

//allows showing of launcher
Bangle.setUI("clock");

//loading the widgets
Bangle.loadWidgets();
Bangle.drawWidgets();

