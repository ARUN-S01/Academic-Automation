// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration

// $(document).ready(()=>{

//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//         apiKey: "AIzaSyDu02A6IQC7cfKWuMdeaLMy17YrSdMwCNk",
//         authDomain: "academic-automation.firebaseapp.com",
//         projectId: "academic-automation",
//         storageBucket: "academic-automation.appspot.com",
//         messagingSenderId: "451688995411",
//         appId: "1:451688995411:web:30099fcfa78b3067b744a6",
//         measurementId: "G-0N3FMG6VMW"
//     };
  
//   // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);
    // const Auth = firebase.auth(); 
    // const dbRef = firebase.database();
    // const contactsRef = dbRef.ref('contacts')
    // const usersRef = dbRef.ref('users')
    // let auth = null;

    // $("#login-form").on('submit',(e) =>{
    //     e.preventDefault();
    //     const data = {
    //         email: $('#login__email').val(),
    //         password: $('#login__password').val(),
    //     };
    //     if(data.email && data.password){
    //         firebase.auth().signInWithEmailAndPassword(data.email,data.password)
    //             .then((authData)=>{
    //                 auth = authData;
    //                 window.alert("Login Success");
    //                 document.write("Login Success");

    //             })
    //             .catch((error)=>{
    //                 document.write("Login Failed!", error);
    //             });
    //     }
    // });
// });

// firebase.auth().onAuthStateChanged(function(user){
//     if (user) {
//         // User is signed in.
    
//         window.alert("Success");
    
//         var user = firebase.auth().currentUser;
    
//           if(user != null){
    
//             var email_id = user.email;
//             // window.location.href = "index.html"
//             //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    
//           }
    
//         } else {
//           // No user is signed in.
    
//         //   document.getElementById("user_div").style.display = "none";
//         //   document.getElementById("login_div").style.display = "block";
    
//         window.alert("No User Found Please SignUp");
//         }
// })

// const auth = firebase.auth();

document.getElementById("login-submit").addEventListener("click", () => {
  login();
});

// const login = () => {
//   const email = document.getElementById("login__email").value;
//   const password = document.getElementById("login__password").value;
  
//   authenticate(email,password);

// };

// const authenticate = (email,password) => {
//   const auth = firebase.auth();
//   auth.signInWithEmailAndPassword(email,password);
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email,password)
//     .catch(function (error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       window.alert(errorMessage);
//     });
// };

const db = firebase.database().ref('users/');

function login(){
  const email = document.getElementById("login__email").value;
  const password = document.getElementById("login__password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}
let ref = null;
firebase.auth().onAuthStateChanged(function (user){
  if (user) {
    var user = firebase.auth().currentUser;

    ref = firebase.database().ref("users/"+user.uid);

    
    showHomepage();
  }
  else{
    console.log(user);
  }
});

const showHomepage = () => {
  //sessionStorage.setItem("Name","NIl User");
  ref.on("value", function(snapshot) {
    sessionStorage.setItem('Name',snapshot.val().Name);
    console.log(snapshot.val().Name);
  }, function (error) {
    console.log("Error: " + error.code);
  });
  var millisecondsToWait = 500;
  setTimeout(function() {
    window.location = "./dashboard/index.html"
    // Whatever you want to do after the wait
  }, millisecondsToWait);
 // window.alert(sessionStorage.getItem('Name'));
  //var ref = firebase.database().ref("users/" + user.uid +"/");
 
  
}


// function login(){

//     var userEmail = document.getElementById("login__email").value;
//     var userPass = document.getElementById("login__password").value;
  
//     firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
  
//       window.alert("Error : " + errorMessage);
  
//       // ...
//     });

//     firebase.auth().onAuthStateChanged(function(user){
//       if (user) {
//           // User is signed in.
      
         
      
//           var user = firebase.auth().currentUser;
      
//             if(user != null){
      
//               var email_id = user.email;
//               window.alert("Success");
//               // window.location.href = "index.html"
//               //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      
//             }
      
//           } else {
//             // No user is signed in.
      
//           //   document.getElementById("user_div").style.display = "none";
//           //   document.getElementById("login_div").style.display = "block";
      
//           window.alert("No User found");
//           }
//   })
  
//   }