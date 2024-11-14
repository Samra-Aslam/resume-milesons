function load() {
    //================importing form ids to variables;======================
    //personal informations;
    var nameValue = document.getElementById('Name');
    var userName_value = document.getElementById('user_name');
    var userEmail_value = document.getElementById('Email');
    var userPhone_value = document.getElementById('Phone');
    var userCity_value = document.getElementById('City');
    //======================seting variables values on local storage======================
    //contact setting;
    localStorage.setItem("nameValue", nameValue.value);
    localStorage.setItem("userName_value", userName_value.value);
    localStorage.setItem("userEmail_value", userEmail_value.value);
    localStorage.setItem("userPhone_value", userPhone_value.value);
    localStorage.setItem("userCity_value", userCity_value.value);
}
var nextbtn2 = document.getElementById('nextbtn');
nextbtn2.addEventListener('click', function () {
    load();
});
