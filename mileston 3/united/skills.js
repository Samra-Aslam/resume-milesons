function load3() {
    //================importing form ids to variables;======================
    //skills;
    var userSkil1_Value = document.getElementById('user_skil1');
    var userSkil2_Value = document.getElementById('user_skil2');
    var userSkil3_Value = document.getElementById('user_skil3');
    //======================seting variables values on local storage======================
    //skills setting;
    localStorage.setItem("userSkil1_Value", userSkil1_Value.value);
    localStorage.setItem("userSkil2_Value", userSkil2_Value.value);
    localStorage.setItem("userSkil3_Value", userSkil3_Value.value);
}
var Backbtn4 = document.getElementById('backbtn');
Backbtn4.addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
    load3();
});
