firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    if (user != null) {

    }
  } else {
    // No user is signed in.
    window.location.replace("login.html");
  }
});
