var firebaseConfig = {
    apiKey: "AIzaSyDmfO2_6z8jx-gK8qKnysQRUjLh8N8OiUw",
    authDomain: "kwitter-cc342.firebaseapp.com",
    databaseURL: "https://kwitter-cc342-default-rtdb.firebaseio.com",
    projectId: "kwitter-cc342",
    storageBucket: "kwitter-cc342.appspot.com",
    messagingSenderId: "328275149995",
    appId: "1:328275149995:web:bb1d2e250d7bb9f6ed23ee"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
     
       user_name = localStorage.getItem("user_name");
       room_name = localStorage.getItem("room_name");
       
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
       //End code
             } });  }); }
       getData();
       