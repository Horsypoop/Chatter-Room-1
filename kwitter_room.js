var name1 = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + name1;

const firebaseConfig = {
      apiKey: "AIzaSyBdoNLqx-lz-ypvx3hIV9LXghjc2Z5O_KU",
      authDomain: "kwitter-730c3.firebaseapp.com",
      databaseURL: "https://kwitter-730c3-default-rtdb.firebaseio.com",
      projectId: "kwitter-730c3",
      storageBucket: "kwitter-730c3.appspot.com",
      messagingSenderId: "64880101662",
      appId: "1:64880101662:web:305882400e1766d1d0210f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}

      
getData();

function logout(){
      window.location="index.html";
}     