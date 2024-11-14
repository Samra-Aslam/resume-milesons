function load2(){
//================importing form ids to variables;======================
       
        //languages;
             let userlangu1_value =document.getElementById('user_lang1')as HTMLInputElement;
             let userlangu2_value =document.getElementById('user_lang2')as HTMLInputElement;
             let userlangu3_value =document.getElementById('user_lang3')as HTMLInputElement;
        
            

//======================seting variables values on local storage======================
        
        //languages setting;
            localStorage.setItem("userlangu1_value",userlangu1_value.value);
            localStorage.setItem("userlangu2_value",userlangu2_value.value);
            localStorage.setItem("userlangu3_value",userlangu3_value.value);
        

}



let Backbtn1 = document.getElementById('backbtn') as HTMLButtonElement;
Backbtn1.addEventListener('click' , (e:Event)=>{
     e.preventDefault();
    window.history.back();
    load2();

});




