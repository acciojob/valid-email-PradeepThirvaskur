
  //your JS code here.
	function ValidEmail(str){
             const regex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/;
             return regex.test(str);
        
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
