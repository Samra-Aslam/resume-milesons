function load(){
//================importing form ids to variables;======================
        //personal informations;
             let nameValue=document.getElementById('Name') as HTMLInputElement;
             let userName_value =document.getElementById('user_name') as HTMLInputElement;
             let userEmail_value =document.getElementById('Email')as HTMLInputElement;
             let userPhone_value =document.getElementById('Phone')as HTMLInputElement;
             let userCity_value = document.getElementById('City')as HTMLInputElement;
        
            



//======================seting variables values on local storage======================
        //contact setting;
            localStorage.setItem("nameValue",nameValue.value);
            localStorage.setItem("userName_value",userName_value.value);
            localStorage.setItem("userEmail_value",userEmail_value.value);
            localStorage.setItem("userPhone_value",userPhone_value.value);
            localStorage.setItem("userCity_value",userCity_value.value);
       
           

}



let nextbtn2 = document.getElementById('nextbtn') as HTMLButtonElement;
nextbtn2.addEventListener('click' , ()=>{
    load();
    

});




