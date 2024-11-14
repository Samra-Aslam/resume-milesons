function load1() {
    //================importing form ids to variables;======================
    //education;
    var userEdu_typValue = document.getElementById('user_QualifType');
    var userEdu_instutValue = document.getElementById('user_institud');
    var userEdu_rankValue = document.getElementById('user_rank');
    //======================seting variables values on local storage======================
    //education setting;
    localStorage.setItem("userEdu_typValue", userEdu_typValue.value);
    localStorage.setItem("userEdu_instutValue", userEdu_instutValue.value);
    localStorage.setItem("userEdu_rankValue", userEdu_rankValue.value);
}
var Backbtn3 = document.getElementById('backbtn');
Backbtn3.addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
    load1();
});
