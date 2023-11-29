    let fname, fn, Er1;
    let sname, sn, Er2;
    let email, Email, Er3;
    let password, Password, Er4;
    let cpassword, Cpassword, Er5;
    let DOB, Dob, Er6;
    let numb, Num, Er7;
    let getValue, Er8;
    let country, country1, Er9;
    let check1, dcheck, Er10;
    let z;

  function initialize(){

         //f1()
         fname = document.getElementById("firstName")
         fn = fname.value;
         Er1 = document.getElementById("er1");
         
        //f2()
         sname = document.getElementById("secondName")
         sn = sname.value; 
         Er2 = document.getElementById("er2");

         //f3()
         email = document.getElementById("em")
         Email = email.value;
         Er3 =document.getElementById("er3")

         //f4()
         password = document.getElementById ("pw")
         Password = password.value;
         Er4 =document.getElementById("er4")

         //f5()
         cpassword = document.getElementById("cpw")
         Cpassword = cpassword.value;
         Er5 = document.getElementById("er5")

         //f6()
         DOB = document.getElementById("dob")
         Dob = DOB.value;
         Er6 =document.getElementById("er6")

         //f7()
         numb = document.getElementById("num")
         Num = numb.value;
         Er7 =document.getElementById("er7")

         //f8()
         getValue = document.querySelector('input[name="fav"]:checked');
         Er8 = document.getElementById("er8")

         //f9()
         country = document.getElementById("cou")
         country1 = country.value;
         Er9 = document.getElementById("er9")

         //f10()
         check1 = document.getElementById("Check")
         dcheck = check1.value
         Er10 = document.getElementById("er10")

   }
 
function validate() 
{
    let a, b, c, d, e, f, g, h, i, j;
       a = f1();
      if(a == true){
         b = f2();
      }else {

        display();
      }

      if(b){
       console.log("Hi")
        c = f3();
      }else{
            display();
      }

      if(c){
        d = f4();
      }else{
        display();
      }

      if(d){
        e = f5();
      }else{
        display();
      }

      if(e){
        f = f6();
      }else{
        display();
      }

      if(f){
        g = f7();
      }else{
        display();
      }

      if(g){
        h = f8()
      }else{
        display();
      }

      if(h){
        i = f9();
      }else{
        display();
      }

      if(i){
        j = f10();
      }else{
        display();
      }
      
      // display start
      function display(){ 

        if(z == 1){
            sname.style.borderColor = "lightgrey" ;
            Er2.innerHTML =" ";
            z++;
        }

        if(z == 2){
            em.style.borderColor = "lightgrey" ;
            Er3.innerHTML = "" ;
            z++;
        }
        
        if(z == 3){
            password.style.borderColor = "lightgrey" ;
            Er4.innerHTML = "";
            z++;
        }

        if(z == 4){
            cpassword.style.borderColor = "lightgrey" ;
            Er5.innerHTML = "";
            z++;
        }

        if(z == 5){
            DOB.style.borderColor = "lightgrey"
            Er6.innerHTML = "";
            z++;
        }

        if(z == 6){
            numb.style.borderColor = "lightgrey";    
            Er7.innerHTML = "" ; 
            z++;
        }

        if(z == 7){
            Er8.innerHTML = "" ;
            z++;
        }

        if(z == 8){
            country.style.borderColor = "lightgrey"
            Er9.innerHTML = "";
            z++;x
        }

        if(z == 9){
            Er10.innerHTML ="" ;
        }
      }

      //display End

     let dmodel = document.getElementById("modelForm");
     let dmodelForm = dmodel.value;
     if(a && b && c && d && e && f && g && h && i && j)
     {
          dmodel.style.display ="block";
     }
 }
 
     // first name start
     function f1(){
        initialize();
         if(fn === ""){
             fname.style.borderColor = "red";
             Er1.innerHTML = "please enter your name";
             z = 1;   
         }else if((fn.charAt(0) >= 'A' && fn.charAt(0) <= 'Z') &&  check(fn)){
             fname.style.borderColor = "green" ;
             Er1.innerHTML = "" ;
              return true;
              
         }else{
             
             Er1.innerHTML = "first name must be Capital & numbers are not valid"
             fname.style.borderColor = "red"
             z = 1;
         }
         function check(name){
             let regEx = /^[a-zA-Z]+$/;
             let n = regEx.test(name);
             return n;
         }
      }

     // first name End

     // second name start 
     function f2(){
        initialize();
         if(sn === ""){
             sname.style.borderColor = "red"
             Er2.innerHTML = "please enter your Second name"
             Er2.style.display = "block"
             z = 2;
 
         }else if((sn.charAt(0) >= 'A' && sn.charAt(0) <= 'Z') && check(sn)){
             sname.style.borderColor = "green" ;
             Er2.innerHTML =" ";
             return true;
         }else{ 
             Er2.innerHTML = "first name must be Capital & numbers are not valid"
             sname.style.borderColor = "red";
             z = 2;
         }

         function check(name){
             let regEx = /^[a-z A-z]+$/ ;
             let rs = regEx.test(name)
             return rs;
         }
     }
     // second name End 

     //email start
     function f3(){
        initialize();
         if(Email === "")
         {
             email.style.borderColor = "red"
             Er3.innerHTML = "please enter your email"
             z = 3;
         
         }else if(check(Email)){
             em.style.borderColor = "green" ;
             Er3.innerHTML = "" ;
             return true;
         }else{
             em.style.borderColor = "red" ;
             Er3.innerHTML ="Give proper mail"
             z = 3;
         }

         function check(name){
           let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
             let rs = regex.test(name);
             return rs;
         }

     }
     //email End    

     //password start
      var r ;
     function f4(){    
        initialize();
         if(Password.trim() === ""){
             password.style.borderColor = "red"
             Er4.innerHTML = "please enter your password"
             z = 4;
             
         }else if(checkpw(Password)){
             password.style.borderColor = "green" ;
             Er4.innerHTML = "";
             r = Password ;
             return true;
         }else{
             password.style.borderColor = "red" ;
             Er4.innerHTML ="password contain atleast 8 characters & one lower & upper case letters & one digit"
             z = 4;
         }

         function checkpw(name){
             let passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
             let rs = passwordRegex.test(name);
             return rs;
         }
     } 
     //password End
   
     //confirm password start
     function f5(){ 
        initialize();
         if(Cpassword.trim() === ""){
             cpassword.style.borderColor = "red" ;
             Er5.innerHTML = "please enter your Confirm Password" ;
             z = 5;
         }else if(Cpassword === r){
             cpassword.style.borderColor = "green" ;
             Er5.innerHTML = "";
             return true;
         }else{
             cpassword.style.borderColor = "red" ;
             Er5.innerHTML ="invalid Confirm password"
             z = 5;
         }
     }
     //confirm password End

     //  date of birth start
     function f6(){
        initialize();
         if(Dob === ""){
             DOB.style.borderColor = "red"
             Er6.innerHTML = "please enter your Date of Birth";
             z = 6;
         }else{
             DOB.style.borderColor = "green"
             Er6.innerHTML = "";
             return true;
         }
     }
     // date of birth End

     // Number start
     function f7(){
        initialize();
         if(Num === ""){
             numb.style.borderColor = "red";    
             Er7.innerHTML = "please enter your Phone Number" ;
             z = 7;
         }else if(check(Num)){
             numb.style.borderColor = "green";    
             Er7.innerHTML = "" ;   
             return true;
         }else{
             numb.style.borderColor = "red";    
             Er7.innerHTML = "invalid Phone Number" ;
             z = 7;
         }
         function check(number){
             let phoneRegex = /^[6-9]\d{9}$/;
             let rs = phoneRegex.test(number);
             return rs;
         }
     }
     //Number End
  
     //gender start
     function f8() { 
        initialize();
         if(getValue === null){
             Er8.innerHTML = "Please Select your Gender"
             z = 8;
         }else{
             Er8.innerHTML = "" ;
             return true;
         }
     }
     //gender End

     //country start
    function f9(){
        initialize();
         if(country1 == ""){
             country.style.borderColor = "red"
             Er9.innerHTML = "Please Select your country";
             z = 9;
         }else{
            country.style.borderColor = "green"
            Er9.innerHTML = "";
            return true;
         }
    }
    //country End
    
    //check box Start
    function f10(){
        initialize();
        if(!check1.checked){ 
            Er10.innerHTML = "We need your Response";
        }else{
            Er10.innerHTML ="" ;
            return true;
        }
    }
 