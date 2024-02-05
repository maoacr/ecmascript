// Antes de ES6

function newUser(name, age) {
  var name = name || "Mao";
  var age = age || 30;
  console.log(name, age);
}

newUser();
newUser("Mayito", 5);

// Default params in ES6
function newClient(name = "Mao", age = 30) {
  console.log(name, age);
}

newClient();
newClient("Yura", 40);
