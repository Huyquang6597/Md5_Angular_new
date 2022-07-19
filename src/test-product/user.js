function loadUser(){
  main.innerHTML = `
  <button onclick="loadList()">List</button>
  <br>
  <button onclick="loadCreate()"> Create </button>
  <div id="content">Home</div>
  `
}

function loadList(){
  document.getElementById(`content`).innerHTML = "Haaaaaa";
}
function loadCreate(){
  document.getElementById(`content`).innerHTML = "cccc";
}
