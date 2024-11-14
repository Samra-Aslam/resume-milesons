//====================getting data fron local storage=============================
//contact data;
var userName1 = localStorage.getItem("userName_value");
console.log(userName1);
var name1 = localStorage.getItem('nameValue');
console.log(name1);
var email1 = localStorage.getItem("userEmail_value");
console.log(email1);
var phone1 = localStorage.getItem("userPhone_value");
console.log(phone1);
var city1 = localStorage.getItem("userCity_value");
console.log(city1);
//languages data;
var langu1 = localStorage.getItem("userlangu1_value");
console.log(langu1);
var langu2 = localStorage.getItem("userlangu2_value");
console.log(langu2);
var langu3 = localStorage.getItem("userlangu3_value");
console.log(langu3);
//education data;
var Qualif1 = localStorage.getItem("userEdu_typValue");
console.log(Qualif1);
var Institute1 = localStorage.getItem("userEdu_instutValue");
console.log(Institute1);
var Rank1 = localStorage.getItem("userEdu_rankValue");
console.log(Rank1);
//skills data;
var skill1 = localStorage.getItem("userSkil1_Value");
console.log(skill1);
var skill2 = localStorage.getItem("userSkil2_Value");
console.log(skill2);
var skill3 = localStorage.getItem("userSkil3_Value");
console.log(skill3);
//experience data;
var compName1 = localStorage.getItem("userCompany_namValue");
console.log(compName1);
var JobTitl1 = localStorage.getItem("userCompany_jobValue");
console.log(JobTitl1);
var Dura1 = localStorage.getItem("userCompany_durValue");
console.log(Dura1);
// =========================== resume tag importing =============================
//1contact information;
var yourName = document.getElementById('your_name');
yourName.textContent = name1;
var yourEmail = document.getElementById('your_email');
yourEmail.textContent = email1;
var yourPhone = document.getElementById('your_phone');
yourPhone.textContent = phone1;
var yourCity = document.getElementById('your_city');
yourCity.textContent = city1;
//languages information;
var yourLangu1 = document.getElementById('your_lang1');
yourLangu1.textContent = langu1;
var yourLangu2 = document.getElementById('your_lang2');
yourLangu2.textContent = langu2;
var yourLangu3 = document.getElementById('your_lang3');
yourLangu3.textContent = langu3;
//Education information
var yourQualification = document.getElementById('your_educa');
yourQualification.textContent = Qualif1;
var yourInstitut = document.getElementById('your_institute');
yourInstitut.textContent = Institute1;
var yourRank = document.getElementById('your_rank');
yourRank.textContent = Rank1;
//skills informatin
var yourSkil1 = document.getElementById('your_sk1');
yourSkil1.textContent = skill1;
var yourSkil2 = document.getElementById('your_sk2');
yourSkil2.textContent = skill2;
var yourSkil3 = document.getElementById('your_sk3');
yourSkil3.textContent = skill3;
//Experience information
var yourComNam = document.getElementById('cName');
yourComNam.textContent = compName1;
var yourComjob = document.getElementById('cJob');
yourComjob.textContent = JobTitl1;
var yourduration = document.getElementById('cDuration');
yourduration.textContent = Dura1;
// download button download===========================================================
var downloadbtn = document.getElementById('download-btn');
downloadbtn.addEventListener('click', function () {
    window.print();
});
var Editbtn = document.getElementById('Edit-btn');
Editbtn.addEventListener('click', function () {
    window.history.back();
});
