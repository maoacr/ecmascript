//Default params

function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 27;
  var country = country || "COL";
  console.log(name, age, country);
}

newFunction();