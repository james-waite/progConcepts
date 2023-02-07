let r = 120,
  g = 140,
  b = 60, // default colors to 'summer'
  branchLen = 0.7, // change this for # of branches & length, 0 --> 1
  amountY = 0,
  myCanvas,
  imgArray = [];

function setup() {
  myCanvas = createCanvas(500, 500, WEBGL);
  myCanvas.parent('myContainer');
  angleMode(DEGREES);

  // noLoop();
}

function draw() {
  background(200);
  // seeding all the randoms
  randomSeed(1);

  translate(0, 150, 0);

  frameRate(1);
  rotateY(amountY);

  branch(100);
}

function branch(len) {
  strokeWeight(map(len, 10, 100, 1, 10)); // for tapered branches
  stroke(70, 40, 20);
  line(0, 0, 0, 0, -len - 5, 0);

  translate(0, -len, 0);

  if (len > 10) {
    for (let i = 0; i < 3; i++) {
      rotateY(random(100, 140));
      push();
      rotateZ(random(20, 50));
      branch(len * branchLen);
      pop();
    }
  } else {
    fill(r, g, b, 200);
    noStroke();

    translate(5, -5, 0);
    rotateZ(90);

    beginShape();
    for (let i = 45; i < 135; i++) {
      let rad = 7;
      let x = rad * cos(i);
      let y = rad * sin(i);
      vertex(x, y);
    }
    for (let i = 135; i > 45; i--) {
      let rad = 7;
      let x = rad * cos(i);
      let y = rad * sin(-i) + 10;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

function rotateTree(dir) {
  true ? (amountY += 10) : (amountY -= 10);
  console.log(dir);
}

function changeSeason(season) {
  if (season.value === 'spring') {
    r = random(180, 220);
    g = random(200, 250);
    b = random(60, 120);
  } else if (season.value === 'summer') {
    r = random(60, 120);
    g = random(140, 200);
    b = random(20, 60);
  } else if (season.value === 'autumn') {
    r = random(200, 250);
    g = random(90, 140);
    b = random(20, 60);
  } else if (season.value === 'winter') {
    r = random(160, 200);
    g = random(200, 250);
    b = random(200, 250);
  } else {
    (r = random(60, 120)), (g = random(90, 140)), (b = random(20, 60));
  }
}

function saveImg() {
  const screenshot = get();
  // screenshot.save(myCanvas, 'screenshot', '.jpg');
  saveCanvas(myCanvas, 'screenshot', 'jpg');
  imgArray.push(screenshot);
  console.log(imgArray);

  // const gallery = document.getElementById('imgGallery');
  // for (i = 0; i < imgArray.length; i++) {
  //   gallery.appendChild(imgArray[i]);
  // }
}

// A problem I've wanted to tackle for a while is being able to save screenshots of the canvas into an array that is then iterated over and <image/> tags are created within the HTML body. I've gotten the pixel data added to an array (see the console), but I think it's just in pixel form so I might have to re-encode it? I don't actually know! Here's a stackoverflow thread I might look into after this project... https://stackoverflow.com/questions/22823752/creating-image-from-array-in-javascript-and-html5
