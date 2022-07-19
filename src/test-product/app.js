let main = document.getElementById('main')
loadHome();

function loadHome(){
  main.innerHTML = "<button onClick='loadUser()'>Login</button> <br><button onClick='loadAdmin()'>Login Admin</button>"
}
