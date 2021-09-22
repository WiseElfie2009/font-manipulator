function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
  
    video = createCapture(VIDEO);
  
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log("╰(*°▽°*)╯ posenet is initialed ╰(*°▽°*)╯");
  }

  function gotPoses(results) {
    if (results.length > 0) {
      console.log(results);
    }
  
  }