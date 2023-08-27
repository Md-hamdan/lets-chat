//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDqKLoIrkcoCFgz5YnOk0uaW37WwovNEyM",
      authDomain: "kwitter-eeb0b.firebaseapp.com",
      databaseURL: "https://kwitter-eeb0b-default-rtdb.firebaseio.com",
      projectId: "kwitter-eeb0b",
      storageBucket: "kwitter-eeb0b.appspot.com",
      messagingSenderId: "54229966800",
      appId: "1:54229966800:web:55b5c4a7583275e64de3d5"
    };

    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name");
    var room_name = localStorage.getItem("room_name");

    function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
 }