import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
const auth = getAuth();

const signUp = () => {
    console.log(auth);
    let userName = document.getElementById("adminname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword( auth,email.value, password.value)
        .then((resolve) => {
            alert("Signup successful")
           window.location = "./login.html"
        })
        .catch((reject) => {
            alert("Signup rejected"+Error)
        })
}
const signUp_Btn = document.getElementById("signup-btn")
if (signUp_Btn) {
    signUp_Btn.addEventListener("click", signUp);
}



const login = () => {
    let username=document.getElementById("username")
        let email = document.getElementById("email")
    let password = document.getElementById("password")
    signInWithEmailAndPassword( auth,email.value, password.value)
        .then((resolve) => {
            alert("Login Successful!")
            window.location = "./student dashboard.html"
        })
        .catch((reject) => {
            alert("Login rejected!")
        })
}
const login_btn = document.getElementById("login-btn")
if (login_btn) {
    

login_btn.addEventListener("click", login);
}

function signout(){
signout(auth).then(()=>{
    window.location.href="index.html"
})

}
document.getElementById("signout").addEventListener(click,signout)



