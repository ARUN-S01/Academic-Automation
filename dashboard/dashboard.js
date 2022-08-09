
document.getElementById("nav-name").innerHTML = sessionStorage.getItem('Name');

document.getElementById("dash-name").innerHTML = sessionStorage.getItem('Name');




document.getElementById("signout").addEventListener("click", () =>{
    signout();
})

function signout(){
    sessionStorage.clear();
    firebase.auth().signOut().then(() => {
        window.alert("Logged Out");
        window.location.href = "../index_login.html";
        // Sign-out successful.
      }).catch((error) => {
        window.alert("Error While Logging out");
        // An error happened.
      });
      

}