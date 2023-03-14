let form=document.getElementById("forminput")
        /* form.addEventListener("submit",(e)=>{
            e.preventDefault()
            validate()
        }) */
        function validate() {
            let firstname = document.getElementById("firstname").value;
            let lastname = document.getElementById("lastname").value;
            let mobile = document.getElementById("mobile").value;
            let email = document.getElementById("userEmail").value;
            let password = document.getElementById("userPassword").value;
            let reEnterPassword = document.getElementById("userReEnterPassword").value;

            if (firstname == "") {
                document.getElementById("message1").innerHTML = `Please Enter First Name` 
                return false;
            }
            //character data validation  
            if (!isNaN(firstname)){  
             document.getElementById("message1").innerHTML = "**Only characters are allowed";  
                return false;  
                }  
            if (firstname.length < 3) {
                document.getElementById("message1").innerHTML = "Please enter Minimum 3 Characters"
                return false;
            }
            if (lastname == "") {
                document.getElementById("message2").innerHTML = `Please Enter Last Name `
                
                return false;
            }
            if (lastname.length < 3) {
                document.getElementById("message2").innerHTML = "Please enter Minimum 3 Characters"
                return false;
            }
            // else{
            //     document.getElementById("message2").innerHTML = "Enterd Corrected"
            // }
    
            if (email == "") {
                document.getElementById("emailMessage").innerHTML = "Please Enter Email";
                return false
            }
            // else{
            //     document.getElementById("emailMessage").innerHTML = "";
            // }

             //minimum password length validation  

            if (password.length < 8){
                document.getElementById("passwordMessage").innerHTML = "Please enter Minimum 8 Characters"
                return false
            }

            //maximum length of password validation  
            if (password.length > 15){
                document.getElementById("passwordMessage").innerHTML = "Please enter Maximum 14 Characters"
                return false
            }
             //minimum password length validation  
            if (reEnterPassword.length < 8){
                document.getElementById("matchPassword").innerHTML = "Please enter Minimum 8 Characters"
                return false
            }

            //maximum length of password validation  
            if (reEnterPassword.length > 15){
                document.getElementById("matchPassword").innerHTML = "Please enter Maximum 14 Characters"
                return false
            }

            if (password != reEnterPassword){
                document.getElementById("matchPassword").innerHTML = "Password Not Matched"

              return false
            }  


            if (mobile == "") {
                document.getElementById("message3").innerHTML=' Please Enter Mobile No'
                return false
            }
              if(mobile.length < 10) {
                document.getElementById("message3").innerHTML='Please fill Min 10 char'
                return false
            }
            if( mobile.length>10){
                document.getElementById("message3").innerHTML='Please fill max 10 char'
                return false
            }
            else{
                document.getElementById("message3").innerHTML=''

            }
            if(firstname!="" && lastname!="" && email!="" && mobile!=""){
                console.log({
                    "first:":firstname
                })
            }
    
        }
        