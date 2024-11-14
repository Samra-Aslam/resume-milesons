function load4(){
//================importing form ids to variables;======================
       
        //experience;
            let userCompany_namValue = document.getElementById('user_compNam') as HTMLInputElement;
            let userCompany_jobValue = document.getElementById('user_JobTitl') as HTMLInputElement;
            let userCompany_durValue = document.getElementById('user_JobDuration') as HTMLInputElement;



//======================seting variables values on local storage======================
       
           
        //experience setting;
            localStorage.setItem("userCompany_namValue",userCompany_namValue.value);
            localStorage.setItem("userCompany_jobValue",userCompany_jobValue.value);
            localStorage.setItem("userCompany_durValue",userCompany_durValue.value);

}



let submit = document.getElementById('submitbtn')as HTMLButtonElement;
submit.addEventListener('click' ,  ()=>{

    load4();
    window.location.href="resume.html";
});


let Backbtn5 = document.getElementById('backbtn') as HTMLButtonElement;
Backbtn5.addEventListener('click' , (e:Event)=>{
    e.preventDefault();
    window.history.back();

});




