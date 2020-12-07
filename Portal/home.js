firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //var user = firebase.auth().currentUser;
    window.location.replace("login.html");
    if (user != null) {

    }
  } else {
    // No user is signed in.
  }
});
