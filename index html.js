
// toggle

sonyup.addEventListener("click" , () => {

page2.classList.remove("page442")
index.classList.add("page442")
anuthercom.innerHTML = ``
document.getElementById("signemail").value = ``
document.getElementById("signpassword").value = ``

})

sonyin.addEventListener("click" , () => {

page2.classList.add("page442")
index.classList.remove("page442")
com.innerHTML = ``
document.getElementById("upemail").value = ``
document.getElementById("uppassword").value = ``
document.getElementById("upname").value = ``

})





// Sign up function


signup.addEventListener("click" , () =>{


var upname = document.getElementById("upname").value
var upemail = document.getElementById("upemail").value
var uppassword = document.getElementById("uppassword").value




if ( !upname || !upemail  || !uppassword ) {
com.innerHTML = `حاسب عشان انتا نسيت تملا البيانات يا معلم`

} else {com.innerHTML = `Succes`

localStorage.setItem(`userename` , upname)
localStorage.setItem(`useremail` , upemail)
localStorage.setItem(`userepass` , uppassword)

}



} )



// Login function

login.addEventListener("click" , () =>{

var signemail = document.getElementById("signemail").value
var signpassword = document.getElementById("signpassword").value


var getemail = localStorage.getItem(`useremail`)
var getpass = localStorage.getItem(`userepass`)


if (signemail == getemail) {

if (signpassword == getpass) {

window.location.href = `Welcome.html`

} 

}else if (!signemail || !signpassword) {

anuthercom.innerHTML = `اكتب الاميل طيب والباص عشان يشتغل يا زكي`

} else if (signemail != getemail || signpassword != getpass) {
    anuthercom.innerHTML = `امسك حرااااااااامي`
}






})











































