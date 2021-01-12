// Get all modals
var violetModal = document.getElementById("violetModal");
var furiesModal = document.getElementById("furiesModal");
var turnerModal = document.getElementById("turnerModal");

var deliverModal = document.getElementById("deliverModal");
var somervilleModal = document.getElementById("somervilleModal");
var robertModal = document.getElementById("robertModal");
var adaModal = document.getElementById("adaModal");
var faiaModal = document.getElementById("faiaModal");

var babbageModal = document.getElementById("babbageModal");
var louisModal = document.getElementById("louisModal");
var cocoModal = document.getElementById("cocoModal");

var gatesModal = document.getElementById("gatesModal");

// Get all buttons that opens the modals
var violetBtn = document.getElementById("violetBtn");
var furiesBtn = document.getElementById("furiesBtn");
var turnerBtn = document.getElementById("turnerBtn");

var deliverBtn = document.getElementById("deliverBtn");
var somervilleBtn = document.getElementById("somervilleBtn");
var robertBtn = document.getElementById("robertBtn");
var adaBtn = document.getElementById("adaBtn");
var faiaBtn = document.getElementById("faiaBtn");

var babbageBtn = document.getElementById("babbageBtn");
var louisBtn = document.getElementById("louisBtn");
var cocoBtn = document.getElementById("cocoBtn");

var gatesBtn = document.getElementById("gatesBtn");

// Get the <span> element that closes the modal
var violetClose = document.getElementsByClassName("violetClose")[0];
var furiesClose = document.getElementsByClassName("furiesClose")[0];
var turnerClose = document.getElementsByClassName("turnerClose")[0];

var deliverClose = document.getElementsByClassName("deliverClose")[0];
var somervilleClose = document.getElementsByClassName("somervilleClose")[0];
var robertClose = document.getElementsByClassName("robertClose")[0];
var adaClose = document.getElementsByClassName("adaClose")[0];
var faiaClose = document.getElementsByClassName("faiaClose")[0];

var babbageClose = document.getElementsByClassName("babbageClose")[0];
var louisClose = document.getElementsByClassName("louisClose")[0];
var cocoClose = document.getElementsByClassName("cocoClose")[0];

var gatesClose = document.getElementsByClassName("gatesClose")[0];

// When the user clicks the button, open the modal 
violetBtn.onclick = function() {
  violetModal.style.display = "block";
}
furiesBtn.onclick = function() {
  furiesModal.style.display = "block";
}
turnerBtn.onclick = function() {
    turnerModal.style.display = "block";
}

deliverBtn.onclick = function() {
    deliverModal.style.display = "block";
}
somervilleBtn.onclick = function() {
    somervilleModal.style.display = "block";
}
robertBtn.onclick = function() {
    robertModal.style.display = "block";
}
adaBtn.onclick = function() {
    adaModal.style.display = "block";
}
faiaBtn.onclick = function() {
    faiaModal.style.display = "block";
}

babbageBtn.onclick = function() {
    babbageModal.style.display = "block";
}
louisBtn.onclick = function() {
    louisModal.style.display = "block";
}
cocoBtn.onclick = function() {
    cocoModal.style.display = "block";
}

gatesBtn.onclick = function() {
    gatesModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
violetClose.onclick = function() {
  violetModal.style.display = "none";
}
furiesClose.onclick = function() {
  furiesModal.style.display = "none";
}
turnerClose.onclick = function() {
    turnerModal.style.display = "none";
}

deliverClose.onclick = function() {
    deliverModal.style.display = "none";
}
somervilleClose.onclick = function() {
    somervilleModal.style.display = "none";
}
robertClose.onclick = function() {
    robertModal.style.display = "none";
}
adaClose.onclick = function() {
    adaModal.style.display = "none";
}
faiaClose.onclick = function() {
    faiaModal.style.display = "none";
}

babbageClose.onclick = function() {
    babbageModal.style.display = "none";
}
louisClose.onclick = function() {
    louisModal.style.display = "none";
}
cocoClose.onclick = function() {
    cocoModal.style.display = "none";
}

gatesClose.onclick = function() {
    gatesModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == violetModal) {
    violetModal.style.display = "none";
  }
  else if (event.target == furiesModal) {
    furiesModal.style.display = "none";
  }
  else if (event.target == turnerModal) {
    turnerModal.style.display = "none";
  }

  else if (event.target == deliverModal) {
    deliverModal.style.display = "none";
  }
  else if (event.target == somervilleModal) {
    somervilleModal.style.display = "none";
  }
  else if (event.target == robertModal) {
    robertModal.style.display = "none";
  }
  else if (event.target == adaModal) {
    adaModal.style.display = "none";
  }
  else if (event.target == faiaModal) {
    faiaModal.style.display = "none";
  }

  else if (event.target == babbageModal) {
    babbageModal.style.display = "none";
  }
  else if (event.target == louisModal) {
    louisModal.style.display = "none";
  }
  else if (event.target == cocoModal) {
    cocoModal.style.display = "none";
  }

  else if (event.target == gatesModal) {
    gatesModal.style.display = "none";
  }

}