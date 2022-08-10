
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
    
//         window.alert("User Found please login");
//         }
// })
// const usersRef = dbRef.ref('users')
// const data = {
//     email: document.getElementById("login__email_s").value,
//     name: document.getElementById("login__email_n").value,
// }

// function signup(){

//     var userEmail = document.getElementById("login__email_s").value;
//     var userPass = document.getElementById("login__password_s").value;

//     firebase.auth().createUserWithEmailAndPassword(userEmail,userPass).then((user) =>{
//         auth = user;
//         usersRef.child(user.uid)
//         .set(data)
//         .then(() => window.alert("Signed Up"))

//     })
//     .catch((error) => {
//         window.alert(error);
//     })

    // firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
  
    //   window.alert("Error : " + errorMessage);
  
    //   // ...
    // });
  
//   }


// const usersRef = dbRef.child('users');

let auth = null;
document.getElementById("signup-button").addEventListener("click", () => {
    register();
})

function register(){
    const name = document.getElementById("login__email_").value;
    const email = document.getElementById("login__email").value;
    const password = document.getElementById("login__password").value;

    const data = {
        Name: name,
        Email: email,
    }
    firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((user) => {
            auth = user;
            var dbRef = firebase.database().ref("users/" + user.user.uid + "/");
            
            // dbRef.set(dbRef.ref(db,'users/' + user.uid),{
            //     data
            // })
            dbRef.set(data)
            // usersRef
            // .child(user.uid)
            // .set(data)
            .then(() => apply(name))

            .catch((error) => {
                
                window.alert(error.message);
            })
        });
}

function apply(a){
    window.alert("Please Login To Continue");
    // window.alert("Welcome "+ auth.user.Name);
    sessionStorage.setItem('Name',a);
    window.location = "index.html"
}

// $(document).ready(()=>{
    

//     const Auth = firebase.auth(); 
//     const dbRef = firebase.database();
//     const contactsRef = dbRef.ref('contacts')
//     const usersRef = dbRef.ref('users')
//     let auth = null;

//     $("#signup-form").on('submit',(e) =>{
//         e.preventDefault();
//         const data = {
//             email:$('#login__email').val(),
//             name: $('#login_email_').val(),
//         };

//         firebase.auth().createUserWithEmailAndPassword(userEmail,userPass).then((user) =>{
//             auth = user;
//             usersRef.child(user.uid)
//             .set(data)
//             .then(() => window.alert("Signed Up"))
    
//         })
//         .catch((error) => {
//             window.alert(error);
//         })

//     })
// });
