 // Create a new instance of the Instascan scanner
 let scanner = new Instascan.Scanner({
    video: document.getElementById('preview'),
    mirror: false // Do not mirror the video feed
  });

  // Add an event listener to scan QR codes
  scanner.addListener('scan', function(content) {
    document.getElementById('result').innerHTML = 'QR Code Value: ' + content;

    qrValue =  document.getElementById('result').innerHTML;

    if (qrValue == "QR Code Value: https://omshelke2.github.io/connect/"){
      alert("300 rupees Deducted !!");
      console.log("same");
    } else{
      alert("Not");
      console.log("different");
    }
  });

  // Start the scanner
  Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
      // Use the back camera if available
      let backCamera = cameras.find(function(camera) {
        return camera.name.toLowerCase().includes('back');
      });
      if (!backCamera) {
        backCamera = cameras[0]; // Use the first camera as a fallback
      }
      scanner.start(backCamera);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function(e) {
    console.error(e);
  });