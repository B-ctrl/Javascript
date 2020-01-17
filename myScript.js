 

   
function pwdGen(){

    // validating the requested pwd length
    var reqLength, text;
  
    // Get the value of the input field with id="pwdLength"
    reqLength = document.getElementById("pwdLength").value;
  
    // If pwdLength is Not a Number or less than 8 or greater than 128
    if (isNaN(reqLength) || reqLength < 8 || reqLength > 128) {
      window.alert("Requested password length not within guidelines!");
      text = "Bad input";
    } else {
      text = "Input OK";
    }

    // used for testing to see if the user selected input is OK based on the previous validation
    document.getElementById("demo").innerHTML = text;

    // used for testing to the the value on the screen
    document.getElementById("demo1").innerHTML = reqLength;
    
    // create the reference strings    
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";  // creates the lowercase alphabet string
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // creates the uppercase alphabet string
    var special = "~!@#$%^&*()_-";  // creates the special character string
    var num = "0123456789";  // creates the number character string
    
    //create an array of the correct length
    var lower = [0];
    var upper = [0];
    var spec = [0];
    var numberList = [0];
    var text = "";
    var i;
    var input=reqLength;

    //create an all lower case random array
    for (i = 0; i < input-1; i++) {
    lower.push("p" + (i + 1));
    }

    for (i = 0; i < input; i++) {
        lower[i] = lowerCase.charAt(Math.floor(Math.random() * 26));
        }

    document.getElementById("array").innerHTML = lower.length;
    document.getElementById("array2").innerHTML = lower;
    document.getElementById("array3").innerHTML = lower.join("");

   //create an all upper case random array
   for (i = 0; i < input-1; i++) {
    upper.push("p" + (i + 1));
    }

    for (i = 0; i < input; i++) {
        upper[i] = upperCase.charAt(Math.floor(Math.random() * 26));
        }

    document.getElementById("array4").innerHTML = upper.length;
    document.getElementById("array5").innerHTML = upper;
    document.getElementById("array6").innerHTML = upper.join("");

    //create an all special character array
    for (i = 0; i < input-1; i++) {
        spec.push("p" + (i + 1));
        }
    
    for (i = 0; i < input; i++) {
        spec[i] = special.charAt(Math.floor(Math.random() * 12));
        }
    
    document.getElementById("array7").innerHTML = spec.length;
    document.getElementById("array8").innerHTML = spec;
    document.getElementById("array9").innerHTML = spec.join("");

    //create an all number array
    for (i = 0; i < input-1; i++) {
        numberList.push("p" + (i + 1));
        }
    
    for (i = 0; i < input; i++) {
        numberList[i] = Math.floor(Math.random() * 10);
        }
    
    document.getElementById("array10").innerHTML = numberList.length;
    document.getElementById("array11").innerHTML = numberList;
    document.getElementById("array12").innerHTML = numberList.join("");


    // random number generator from 0-25 to align with alphabet string length
    var firstposition = Math.floor(Math.random() * 26) ;
    var secondposition = Math.floor(Math.random() * 26) ;
    var U1rand = Math.floor(Math.random() * 26) ;
    var U2rand = Math.floor(Math.random() * 26) ;
    var U3rand = Math.floor(Math.random() * 26) ;
    
    // random number generator from 0-11 to align with alphabet string length
    var specialOne = Math.floor(Math.random() * 12) ;
    var specialTwo = Math.floor(Math.random() * 12) ;
    var specialThree = Math.floor(Math.random() * 12) ;
    
    // associating the random number to a letter on the alphabet
    var L1 = lowerCase.charAt(firstposition);
    var L2 = lowerCase.charAt(secondposition);
    var S1 = special.charAt(specialOne)
    var S2 = special.charAt(specialTwo)
    var S3 = special.charAt(specialThree)
    var U1 = upperCase.charAt(U1rand);
    var U2 = upperCase.charAt(U2rand);
    var U3 = upperCase.charAt(U3rand);
    
    // adding the string
    var combined = L1 + U1 + U2 + S1 + L2 + U3 + S2 + S3;



    
    
    document.getElementById("newpwd").value = combined; 
    document.getElementById("pwd").innerHTML = combined;

}

function copyText() {
    var copyText = document.getElementById("newpwd");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
    