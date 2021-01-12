// Get all modals
var essayModal = document.getElementById("essayModal");
var t1Modal = document.getElementById("t1Modal")
var t2Modal = document.getElementById("t2Modal")
var t3Modal = document.getElementById("t3Modal")
var t4Modal = document.getElementById("t4Modal")

// Get all buttons that opens the modals
var essayBtn = document.getElementById("essayBtn");
var t1Btn = document.getElementById("t1Btn");
var t2Btn = document.getElementById("t2Btn");
var t3Btn = document.getElementById("t3Btn");
var t4Btn = document.getElementById("t4Btn");

// Get the <span> element that closes the modal
var essayClose = document.getElementsByClassName("essayClose")[0];
var t1Close = document.getElementsByClassName("t1Close")[0];
var t2Close = document.getElementsByClassName("t2Close")[0];
var t3Close = document.getElementsByClassName("t3Close")[0];
var t4Close = document.getElementsByClassName("t4Close")[0];

// When the user clicks the button, open the modal 
essayBtn.onclick = function() {
    essayModal.style.display = "block";
}
t1Btn.onclick = function() {
  t1Modal.style.display = "block";
}
t2Btn.onclick = function() {
    t2Modal.style.display = "block";
}
t3Btn.onclick = function() {
    t3Modal.style.display = "block";
}
t4Btn.onclick = function() {
    t4Modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
essayClose.onclick = function() {
    essayModal.style.display = "none";
}
t1Close.onclick = function() {
  t1Modal.style.display = "none";
}
t2Close.onclick = function() {
    t2Modal.style.display = "none";
}
t3Close.onclick = function() {
    t3Modal.style.display = "none";
}
t4Close.onclick = function() {
    t4Modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == essayModal) {
    essayModal.style.display = "none";
  }
  else if (event.target == t1Modal) {
    t1Modal.style.display = "none";
  }
  else if (event.target == t2Modal) {
    t2Modal.style.display = "none";
  }
  else if (event.target == t3Modal) {
    t3Modal.style.display = "none";
  }
  else if (event.target == t4Modal) {
    t4Modal.style.display = "none";
  }
}