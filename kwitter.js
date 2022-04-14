function login(){
    save=document.getElementById("user_name").value;
    localStorage.setItem("user_name" , save);
    window.location="kwitter_room.html";
}