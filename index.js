const input = ["true", "20"];
let index = 0;

function gets() {
return input[index++];
}

function main() {
  const hasPermission = gets().toLowerCase() === "true";
  const age = parseInt(gets().trim());
	if (!hasPermission) {
    console.log("Acesso negado");
  } else if (age < 18) {
    console.log("Idade insuficiente");
  } else {
    console.log("Acesso permitido");
  }
}

main();