 
function myLength() {
    var x, text;
  
    // Get the value of the input field with id="pwdLength"
    x = document.getElementById("pwdLength").value;
  
    // If x is Not a Number or less than 8 or greater than 128
    if (isNaN(x) || x < 8 || x > 128) {
      window.alert("Requested password length not within guidelines!");
      text = "Bad input";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo1").innerHTML = x;
    
}
   
function pwdGen(){


  


    // create the reference strings    
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";  // creates the lowercase alphabet string
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // creates the uppercase alphabet string
    var special = "~!@#$%^&*()_-";  // creates the special character string
    
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
    
    
    
    var combined = L1 + U1 + U2 + S1 + L2 + U3 + S2 + S3;
    
    var test = "Hello"; 
    document.getElementById("newpwd").value = combined; 
    document.getElementById("pwd").innerHTML = combined;

}

function copyText() {
    var copyText = document.getElementById("newpwd");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
    