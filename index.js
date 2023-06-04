// index.js

// Create a new instance of the Instascan scanner
let scanner = new Instascan.Scanner({
  video: document.getElementById('preview'),
  mirror: false // Do not mirror the video feed
});

// Add an event listener to scan QR codes
scanner.addListener('scan', function(content) {
  document.getElementById('result').innerHTML = 'QR Code Value: ' + content;

  let qrValue = content.trim();
  let expectedQRValue = 'https://omshelke2.github.io/connect/';

  if (qrValue === expectedQRValue) {
    let password = prompt('Enter Password:');
    if (password === '1234') {
      alert('30 rupees Deducted !!');

      // Update account balance
      let accountBalance = parseFloat(localStorage.getItem('accountBalance'));
      accountBalance -= 30;
      localStorage.setItem('accountBalance', accountBalance.toFixed(2));

      // Redirect to account details page
      window.location.href = 'accountDetails.html';
    } else {
      alert('Incorrect Password');
    }
  } else {
    alert('Invalid QR Code');
  }
});

// Start the scanner
Instascan.Camera.getCameras().then(function(cameras) {
  if (cameras.length > 0) {
    let backCamera = cameras.find(function(camera) {
      return camera.name.toLowerCase().includes('back');
    });
    if (!backCamera) {
      backCamera = cameras[0];
    }
    scanner.start(backCamera);
  } else {
    console.error('No cameras found.');
  }
}).catch(function(e) {
  console.error(e);
});
