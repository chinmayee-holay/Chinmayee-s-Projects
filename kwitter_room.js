var firebaseConfig = {
      apiKey: "AIzaSyB5JGuMeuNh0CuTbUiBtReW9j5AOCDbgXM",
      authDomain: "school-chat-app-4b042.firebaseapp.com",
      databaseURL: "https://school-chat-app-4b042-default-rtdb.firebaseio.com",
      projectId: "school-chat-app-4b042",
      storageBucket: "school-chat-app-4b042.appspot.com",
      messagingSenderId: "927023207724",
      appId: "1:927023207724:web:eb455a44b6ceb34343c889"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome"+ user_name+"!";
//ADD YOUR FIREBASE LINKS HERE
function add_room()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_user"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name - "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}