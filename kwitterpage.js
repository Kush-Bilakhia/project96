//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDgD4V-qPyDZvIhBOhEy-k1Qqr5Ow7ShwY",
    authDomain: "kwitter-b1798.firebaseapp.com",
    databaseURL: "https://kwitter-b1798-default-rtdb.firebaseio.com",
    projectId: "kwitter-b1798",
    storageBucket: "kwitter-b1798.appspot.com",
    messagingSenderId: "607976857757",
    appId: "1:607976857757:web:536101ecdb8776cd70b474",
    measurementId: "G-PKQ9NP3X0R"
  };
  
  
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();




function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}



function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}