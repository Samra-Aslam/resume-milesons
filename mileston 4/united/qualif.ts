function load1(){
//================importing form ids to variables;======================
        
        //education;
            let userEdu_typValue = document.getElementById('user_QualifType') as HTMLInputElement;
            let userEdu_instutValue  = document.getElementById('user_institud') as HTMLInputElement;
            let userEdu_rankValue  = document.getElementById('user_rank') as HTMLInputElement;
        



//======================seting variables values on local storage======================
        
         
        //education setting;
            localStorage.setItem("userEdu_typValue",userEdu_typValue.value);
            localStorage.setItem("userEdu_instutValue",userEdu_instutValue.value);
            localStorage.setItem("userEdu_rankValue",userEdu_rankValue.value);
        
}



let Backbtn3 = document.getElementById('backbtn') as HTMLButtonElement;
Backbtn3.addEventListener('click' , (e:Event)=>{
    e.preventDefault()
    window.history.back()
    load1()
});




