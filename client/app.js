// MODIFY THIS TO THE APPROPRIATE URL IF IT IS NOT BEING RUN LOCALLY
var socket = io.connect('http://127.0.0.1:5001');

var canvas = document.getElementById('canvas-video');
var context = canvas.getContext('2d');
var img = new Image();

// show loading notice
context.fillStyle = '#333';
context.fillText('Loading...', canvas.width/2-30, canvas.height/3);

// Listen to socket emit event
socket.on('frame', function (data) {
  /*console.log('Getting new frames');
  console.log(data.buffer);
  var uint8Arr = new Uint8Array(data.buffer);
  var str = String.fromCharCode.apply(null, uint8Arr);
  var base64String = btoa(str);

  img.onload = function () {
    context.drawImage(this, 0, 0, canvas.width, canvas.height);
  };
  img.src = 'data:image/png;base64,' + base64String;
  */
});