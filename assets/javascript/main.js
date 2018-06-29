<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>

$(document).ready(function() {
    //intitialize firebase
    var config = {
        apiKey: "AIzaSyAoI87nHXeA_eAnk2hdOEwL19JSqF_r6WM",
        authDomain: "portfolio-c8480.firebaseapp.com",
        databaseURL: "https://portfolio-c8480.firebaseio.com",
        projectId: "portfolio-c8480",
        storageBucket: "",
        messagingSenderId: "103018922786"
    };
    firebase.initializeApp(config);

    var datbase = firebase.datbase();

    $("#submitBTN").on("click", function(event) {

        event.preventDefault();

        var userName = $("#name").val().trim();
        var userEmail = $("#email").val().trim();
        var userMessage = $("#message").val().trim();

        var newEntry = {
            name: userName,
            email: userEmail,
            message: userMessage
        };

        datbase.ref().push(newEntry);

        console.log(newEntry.name);
        console.log(newEntry.email);
        console.log(newEntry.message);

       $("#name").val("");
       $("#email").val("");
       $("#message").val("");
    });

    datbase.ref().on("child_added", function(childSnapshot, prevChild) {
        
        console.log(childSnapshot.val());

        var userName = childSnapshot.val().name;
        var userEmail = childSnapshot.val().email;
        var userMessage = childSnapshot.val().message;
        
        console.log(userName);
        console.log(userEmail);
        console.log(userMessage);
    });
});