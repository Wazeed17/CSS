let form=document.getElementById("forminput")
        form.addEventListener("submit",(e)=>{
            e.preventDefault()
            validate()
        })
        function validate() {
            let firstname = document.getElementById("firstname").value;
            let lastname = document.getElementById("lastname").value;
            let mobile = document.getElementById("mobile").value;
            let email = document.getElementById("userEmail").value;
            if (firstname == "") {
                document.getElementById("message1").innerHTML = `Please Enter Value`
                
                return false;
            }
            if (firstname.length < 3) {
                document.getElementById("message1").innerHTML = "Min 3 Char"
                return false;
            }
            if (lastname == "") {
                document.getElementById("message2").innerHTML = `Please Enter Value`
                
                return false;
            }
            if (lastname.length < 3) {
                document.getElementById("message2").innerHTML = "Min 3 Char"
                return false;
            }
            else{
                document.getElementById("message2").innerHTML = ""
            }
    
            if (email == "") {
                document.getElementById("emailMessage").innerHTML = "Please Enter Email";
                return false
            }
            else{
                document.getElementById("emailMessage").innerHTML = "";
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
        