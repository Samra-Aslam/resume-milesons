function load3(){
//================importing form ids to variables;======================
       
        //skills;
            let userSkil1_Value = document.getElementById('user_skil1') as HTMLInputElement;
            let userSkil2_Value = document.getElementById('user_skil2') as HTMLInputElement;
            let userSkil3_Value = document.getElementById('user_skil3') as HTMLInputElement;

       



//======================seting variables values on local storage======================
      
       
        //skills setting;
            localStorage.setItem("userSkil1_Value",userSkil1_Value.value);
            localStorage.setItem("userSkil2_Value",userSkil2_Value.value);
            localStorage.setItem("userSkil3_Value",userSkil3_Value.value);
       

}






let Backbtn4 = document.getElementById('backbtn') as HTMLButtonElement;
Backbtn4.addEventListener('click' , (e:Event)=>{
    e.preventDefault();
    window.history.back();
    load3();

});




