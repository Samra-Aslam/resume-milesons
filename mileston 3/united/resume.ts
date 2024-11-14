//====================getting data fron local storage=============================

         //contact data;
        let userName1 =localStorage.getItem("userName_value");
console.log(userName1)
        let name1=localStorage.getItem('nameValue');
console.log(name1);
        let email1 = localStorage.getItem("userEmail_value");
console.log(email1)
        let phone1=localStorage.getItem("userPhone_value");
console.log(phone1)
        let city1 = localStorage.getItem("userCity_value")
console.log(city1);

        //languages data;

        let langu1 = localStorage.getItem("userlangu1_value");
console.log(langu1)
        let langu2 = localStorage.getItem("userlangu2_value");
console.log(langu2)
        let langu3 = localStorage.getItem("userlangu3_value");
console.log(langu3)

        //education data;

        let Qualif1 = localStorage.getItem("userEdu_typValue");
console.log(Qualif1)
        let Institute1 = localStorage.getItem("userEdu_instutValue");
console.log(Institute1)
        let Rank1 = localStorage.getItem("userEdu_rankValue");
console.log(Rank1)

        //skills data;

        let skill1 = localStorage.getItem("userSkil1_Value");
console.log(skill1)
        let skill2 = localStorage.getItem("userSkil2_Value");
console.log(skill2)
        let skill3 = localStorage.getItem("userSkil3_Value");
console.log(skill3)

        //experience data;

        let compName1 = localStorage.getItem("userCompany_namValue");
console.log(compName1)
        let JobTitl1 = localStorage.getItem("userCompany_jobValue");
console.log(JobTitl1)
        let Dura1 = localStorage.getItem("userCompany_durValue");
console.log(Dura1)


// =========================== resume tag importing =============================

                              //1contact information;
let yourName = document.getElementById('your_name') as HTMLElement;
yourName.textContent=name1;
let yourEmail = document.getElementById('your_email') as HTMLElement;
yourEmail.textContent=email1;
let yourPhone= document.getElementById('your_phone') as HTMLElement;
yourPhone.textContent=phone1;
let yourCity = document.getElementById('your_city') as HTMLElement;
yourCity.textContent=city1;
                              //languages information;
let yourLangu1 = document.getElementById('your_lang1') as HTMLElement;
yourLangu1.textContent=langu1;
let yourLangu2 = document.getElementById('your_lang2') as HTMLElement;
yourLangu2.textContent=langu2;
let yourLangu3 = document.getElementById('your_lang3') as HTMLElement;
yourLangu3.textContent=langu3;
                              //Education information

let yourQualification = document.getElementById('your_educa')as HTMLElement;
yourQualification.textContent=Qualif1;
let yourInstitut = document.getElementById('your_institute')as HTMLElement;
yourInstitut.textContent=Institute1;
let yourRank = document.getElementById('your_rank')as HTMLElement;
yourRank.textContent=Rank1;

                              //skills informatin
let yourSkil1 = document.getElementById('your_sk1')as HTMLElement;
yourSkil1.textContent=skill1;
let yourSkil2 = document.getElementById('your_sk2')as HTMLElement;
yourSkil2.textContent=skill2;
let yourSkil3 = document.getElementById('your_sk3')as HTMLElement;
yourSkil3.textContent=skill3;

                              //Experience information

let yourComNam =document.getElementById('cName')as HTMLElement;
yourComNam.textContent=compName1;
let yourComjob =document.getElementById('cJob')as HTMLElement;
yourComjob.textContent=JobTitl1;
let yourduration =document.getElementById('cDuration')as HTMLElement;
yourduration.textContent=Dura1;




// download button download===========================================================

    let downloadbtn =document.getElementById('download-btn') as HTMLButtonElement;

    downloadbtn.addEventListener('click' ,()=>{
        window.print()
    });

    
    

    
