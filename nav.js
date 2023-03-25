const projs = document.getElementById("p-list");
const countDivs = projs.children.length;
const count = countDivs;
// console.log(count);

const showcase = document.getElementById("proj-no");

document.getElementById("proj-no").innerHTML = "// " + count + " in showcase";

function toBio() {
  document.getElementById("page").innerHTML = "BIO";
  document.getElementById("proj-no").innerHTML = "// welcome";

  document.getElementById("portfolio").style.display = "none";
  document.getElementById("bioID").style.display = "flex";
} 
function toPort() {
  document.getElementById("page").innerHTML = "PORTFOLIO";
  document.getElementById("proj-no").innerHTML = "// " + count + " in showcase";
  document.getElementById("portfolio").style.display = "flex";
  document.getElementById("bioID").style.display = "none";
} 
 