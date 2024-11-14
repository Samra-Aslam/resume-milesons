function load4() {
    //================importing form ids to variables;======================
    //experience;
    var userCompany_namValue = document.getElementById('user_compNam');
    var userCompany_jobValue = document.getElementById('user_JobTitl');
    var userCompany_durValue = document.getElementById('user_JobDuration');
    //======================seting variables values on local storage======================
    //experience setting;
    localStorage.setItem("userCompany_namValue", userCompany_namValue.value);
    localStorage.setItem("userCompany_jobValue", userCompany_jobValue.value);
    localStorage.setItem("userCompany_durValue", userCompany_durValue.value);
}
var submit = document.getElementById('submitbtn');
submit.addEventListener('click', function () {
    load4();
    window.location.href = "resume.html";
});
var Backbtn5 = document.getElementById('backbtn');
Backbtn5.addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
});
