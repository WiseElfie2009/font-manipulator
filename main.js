  
  
  
  function setup() {
    canvas = createCanvas(400, 350);
    canvas.position(600,300);
  
    video = createCapture(VIDEO);
  video.size(500,500);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
  }
difference=0;
  leftwristx=0;
  rightwristx=0;
  function modelLoaded() {
    console.log("╰(*°▽°*)╯ posenet is initialed ╰(*°▽°*)╯");
  }

  function gotPoses(results) {
    if (results.length > 0) {
      console.log(results);
      leftwristx=results[0].pose.leftWrist.x;
      rightwristx=results[0].pose.rightWrist.x;
      difference=floor(leftwristx-rightwristx);
    }
  
  }

  function draw(){
    background('#6C91C2');
    fill('#FFE787');
    text('Aloka',50,300);
    textSize(difference);
    document.getElementById("difference").innerHTML = "Font size of the text will be = " + difference +"px"; textSize(difference); 
  }


  //ghoul *possesed*
 /*  difference = 0;
   rightWristX = 0;
    leftWristX = 0;
     function setup() {
        video = createCapture(VIDEO);
         video.size(550, 500);
          canvas = createCanvas(550, 550); 
          canvas.position(560,150); 
          poseNet = ml5.poseNet(video, modelLoaded);
           poseNet.on('pose', gotPoses); 
          }
           function modelLoaded() {
              console.log('PoseNet Is Initialized!');
             } 
             function gotPoses(results) {
                if(results.length > 0) { 
                  console.log(results); 
                  leftWristX = results[0].pose.leftWrist.x;
                   rightWristX = results[0].pose.rightWrist.x; 
                   difference = floor(leftWristX - rightWristX);
                    console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference); 
                  }
                 }
                  function draw() { 
                    background('#6C91C2');
                    fill('#FFE787'); 
                    text('Aloka', 50, 400);
                    document.getElementById("difference").innerHTML = "Font size of the text will be = " + difference +"px"; textSize(difference); 
                  } */
                   
                   
                   

