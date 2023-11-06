function getLength() {
  let sampleString = document.getElementById("textbox").value;
  console.log("sampleString", sampleString);
  var stringLength = sampleString.length;
  console.log("stringLength", stringLength);
  document.getElementById("res").innerHTML = stringLength;
}

function Uppercase() {
  let text = document.getElementById("textbox").value;
  var ind = text.toUpperCase();
  console.log(ind);
  document.getElementById("res").innerHTML = ind;
}
function LowerCase() {
  let low = document.getElementById("textbox").value;
  var ind = low.toLowerCase();
  console.log(ind);
  document.getElementById("res").innerHTML = ind;
}

function CamelCase() {
  let str = document.getElementById("textbox").value;
  // converting all characters to lowercase
  console.log("str0", str);
  let ans = str.toLowerCase();

  // Returning string to camelcase
  // return
  const temp = ans
    .split(" ")
    .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
  console.log("temp", temp);
  document.getElementById("res").innerHTML = temp;
}

function reverse() {
  const str = document.getElementById("textbox").value;
  const reversedString = str.split("").reduce((acc, char) => char + acc, "");
  console.log(reversedString);
  document.getElementById("res").innerHTML = reversedString;
}

function Reset() {
  document.getElementById("textbox").value = "";
  document.getElementById("res").innerHTML = " ";
}
