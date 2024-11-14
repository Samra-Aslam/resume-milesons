function load2() {
    //================importing form ids to variables;======================
    //languages;
    var userlangu1_value = document.getElementById('user_lang1');
    var userlangu2_value = document.getElementById('user_lang2');
    var userlangu3_value = document.getElementById('user_lang3');
    //======================seting variables values on local storage======================
    //languages setting;
    localStorage.setItem("userlangu1_value", userlangu1_value.value);
    localStorage.setItem("userlangu2_value", userlangu2_value.value);
    localStorage.setItem("userlangu3_value", userlangu3_value.value);
}
var Backbtn1 = document.getElementById('backbtn');
Backbtn1.addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
    load2();
});
