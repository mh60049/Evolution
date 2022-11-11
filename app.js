let strDevID = "1";  //Device ID
let strSet = 'A';
let strTimer = '';
let myTimer;

getDevID();
myTimer = setInterval(showImg,1000);

function recordDevID() {
  strDevID = prompt("What is your Device ID? ");
  window.localStorage.setItem("DeviceID", strDevID.toString())
}

function getDevID() {
  const str1 = window.localStorage.getItem("DeviceID");
  if (str1) {
    strDevID = str1;
  }
}

function showImg() {
  const current = new Date();

  const lngSec = current.getSeconds();
  const lngSec10 = Math.floor(lngSec / 10);
  
  switch(lngSec10) {
    case 0:
      strSet = 'A';
      break;

    case 1:
      strSet = 'B';
      break;

    case 2:
      strSet = 'C';
      break;

    case 3:
      strSet = 'D';
      break;

    case 4:
      strSet = 'E';
      break;

    case 5:
      strSet = 'E';
      break;
      
  }

  strTimer = strSet + strDevID + '-' + lngSec.toString()
  document.getElementById('idSecond').textContent = strTimer;

  let strURL = strSet + strDevID + ".JPG";
  let img1 = document.getElementById("idImg")
  img1.src = strURL;
}