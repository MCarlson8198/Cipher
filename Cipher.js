function rot13() {
var str = document.getElementById("input1").value;
  var upper = str.toUpperCase();
  var string1 = upper.split("");
  var result = [];

  var cipher = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

  for (var i=0; i<string1.length; i++) {
    if (cipher.indexOf(string1[i]) === -1) {
      result.push(string1[i]);
    }
    else {
      for (var j=0; j<cipher.length; j++){
        if (string1[i]===cipher[j]){
          result.push(cipher[j+13]);
        }
      }
    }

  }


  var final = result.join("");
  document.getElementById('output1').value = final;






}

//rot13("SERR!");
