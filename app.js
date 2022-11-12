let strDevID = "1";  //Device ID
let strSet = 'A';
let strTimer = '';
let lngT0 = 0;
let lngLeft = 0;
let strLeft = '';
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
      lngT0 = 10;
      break;

    case 1:
      strSet = 'B';
      lngT0 = 20;
      break;

    case 2:
      strSet = 'C';
      lngT0 = 30;
      break;

    case 3:
      strSet = 'D';
      lngT0 = 40;
      break;

    case 4:
      strSet = 'E';
      lngT0 = 60;
      break;

    case 5:
      strSet = 'E';
      lngT0 = 60;
      break;
      
  }

  lngLeft = lngT0 - lngSec;
  strLeft = lngLeft.toString();
  strTimer = strSet + strDevID + '-' + strLeft
  document.getElementById('idSecond').textContent = strTimer;

  if (lngLeft === 1) {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance('change ' + strSet + '.'));
  }

  let strURL = strSet + strDevID + ".JPG";
  let img1 = document.getElementById("idImg")
  img1.src = strURL;
}