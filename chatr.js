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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
