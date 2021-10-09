const firebaseConfig = {
    apiKey: "AIzaSyCd9Rf57bu7cqlPMjwX8YGGO5EItsvaams",
    authDomain: "adv-kwitter-cab87.firebaseapp.com",
    databaseURL: "https://adv-kwitter-cab87-default-rtdb.firebaseio.com",
    projectId: "adv-kwitter-cab87",
    storageBucket: "adv-kwitter-cab87.appspot.com",
    messagingSenderId: "983773018463",
    appId: "1:983773018463:web:5b7805912a6d6c7b5e9eea"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("login_user");
document.getElementById("h3username").innerHTML="Welcome "+user_name+"!";
function add_room()
{
room_name=document.getElementById("room_name").value;
localStorage.setItem("roomnamekey",room_name);

firebase.database().ref("/").child(room_name).update({
      Ace : "AFK"
});
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Names - " + Room_names);
       row="<div class='room_name' id = " + Room_names + " onclick='redirectToRoomName(this.id)'>" + "#" + Room_names + "</div> <hr>"; 
      //Start code
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room name",name)
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("login_user");
      localStorage.removeItem("room name");
      window.location="kwitter.html";
}