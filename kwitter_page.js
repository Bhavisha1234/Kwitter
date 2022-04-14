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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function Logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="kwitter.html";
  }
  function send(){
         message=document.getElementById("message").value;
         firebase.database().ref(room_name).push({
              name:user_name,
              message:message,
              like:0
         });
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       console.log(firebase_message_id);
       console.log(message_data);
       name=message_data['name'];
       message=message_data['message'];
       like=message_data['like'];
       name_with_tag="<h4>"+name+" <img class='user_tick' src='tick.jpg'></h4>";
       message_with_tag="<h4 class='message_h4'>"+message+" </h4>";
       like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
       span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
       row=name_with_tag+message_with_tag+like_button+span_with_tag;
       document.getElementById("output").innerHTML+=row;
       
} });  }); }
getData();
function update_like(message_id){
    console.log("clicked on like button-" + message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_like=Number(likes) + 1;
    console.log(updated_like);
    firebase.database().ref(room_name).child(message_id).update({
          like:updated_like
    });
}