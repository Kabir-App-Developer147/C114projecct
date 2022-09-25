noseX=0;
noseY=0;
RightEyeX=0;
RightEyeY=0;
LeftEarX=0;
LeftEarY=0
function preload() {
clown = loadImage('https://i.postimg.cc/bw7jFjHD/f2db4245ca136dff271c8a7faf20a9a4-removebg-preview.png');
lY = loadImage('https://i.postimg.cc/c4YQpRfD/1000-F-296914237-NK5-Ea-N7-Gae-E19-JJSe0r-DXJf8-Mlkn-Tk-Sh-removebg-preview.png')
lE = loadImage('https://i.postimg.cc/2yTVY58S/hat-37542-1280.webp')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
   image(video, 0, 0, 300, 300);
   image(clown, noseX, noseY, 75, 75);
   image(lY, RightEyeX, RightEyeY, 150, 150);
   image(lE, LeftEarX, LeftEarY, 130, 110);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded() 
{
    console.log('PoseNet Is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -35;
        noseY = results[0].pose.nose.y -22;
        RightEyeX = results[0].pose.rightEye.x -75;
        RightEyeY = results[0].pose.rightEye.y -30;
        LeftEarX = results[0].pose.leftEar.x -120;
        LeftEarY = results[0].pose.leftEar.y -140;
        console.log("nose X = " + noseX);
        console.log("nose Y = " + noseY);
        console.log("rightEye X = " + RightEyeX);
        console.log("rightEye Y = " + RightEyeY);
        console.log("leftEar X = " + LeftEarX);
        console.log("leftEar Y = " + LeftEarY);


        
    }
}

