// Selecting DOM
const submit3 = document.getElementById("submitLen");
const submit1 = document.getElementById("submitConv");
const submit2 = document.getElementById("submitClr");

const result = document.getElementById("result");

var finaltxt = "";





//alllen

function allLen(e) {
  e.preventDefault();
  if(finaltxt != "")
  {
    finaltxt = "";
  }
  var str ="1234567890" ;
  var len = str.length;
  for(var i = 1; i <= 15; i++)
  {
    var idx = Math.floor(Math.random() * (len - 1));
    finaltxt += str[idx];
  }
  result.style.visibility = "visible";
  result.innerHTML = finaltxt;
}


// Function
//Generate password
function genPass(e) {
  e.preventDefault();
  if(finaltxt != "")
  {
    finaltxt = "";
  }
  var str = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&";
  var len = str.length;
  for(var i = 1; i <= 10; i++)
  {
    var idx = Math.floor(Math.random() * (len - 1));
    finaltxt += str[idx];
  }
  result.style.visibility = "visible";
  result.innerHTML = finaltxt;
}




//clear
function allClear() {
  const res = document.getElementById("result").value;

  if (txt != "" || res != "") {
    document.getElementById("word").value = "";
    document.getElementById("result").innerHTML = "";
  }
}




submit3.addEventListener("click", allLen);
submit1.addEventListener("click", genPass);
submit2.addEventListener("click", allClear);


