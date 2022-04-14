var firebaseConfig = {
    apiKey: "AIzaSyA6lipyfFeEzplQy-4v1AW19XqMXn4D950",
    authDomain: "let-s-chat-app-ef099.firebaseapp.com",
    projectId: "let-s-chat-app-ef099",
    storageBucket: "let-s-chat-app-ef099.appspot.com",
    messagingSenderId: "39614138045",
    appId: "1:39614138045:web:70626820a95d6af63e99d4",
    measurementId: "G-YQQ6TMBWM7"
  };
   firebase.initializeApp(firebaseConfig);
   function logout(){
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location="kwitter.html.html";
   }
 function add_room(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room_name"
  });
  localStorage.setItem("room_name" , room_name);
window.location="kwitter_page.html";
 }     
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    console.log("room_name-" + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom_name(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
   
    });});}
getData();
