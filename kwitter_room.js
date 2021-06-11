var firebaseConfig = {
    apiKey: "AIzaSyBMz5Lx4oq9cFksBIVgY1csUT20Js6s7YY",
    authDomain: "lets-chat--app.firebaseapp.com",
    databaseURL: "https://lets-chat--app-default-rtdb.firebaseio.com",
    projectId: "lets-chat--app",
    storageBucket: "lets-chat--app.appspot.com",
    messagingSenderId: "624443915735",
    appId: "1:624443915735:web:d3af642366598f98745f92"
  };

  
  firebase.initializeApp(firebaseConfig);

    User_name = localStorage.getItem("User_name");
    document.getElementById("User_name"). innerHTML = "Welcome  " + User_name;

    function addroom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name -"+ Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectRoomname(this.id)'>"+ Room_names + "</div> <hr>";
      });});}
getData();

function redirectRoomname(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);

  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";
}
