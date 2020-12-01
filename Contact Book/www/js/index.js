window.onload = () => {
  var btn = document.getElementById("add");
  btn.addEventListener("click", add);
  var name, email, phone, relation, div, p, final, img;

  function add() {
    name = document.getElementById("name");
    email = document.getElementById("email");
    phone = document.getElementById("phone");
    relation = document.getElementById("relation");
    div = document.createElement("div");
    div.classList.add("cont");
    p = document.createElement("p");
    p.innerHTML = `Name: ${name.value} <br><br>E-mail: ${email.value} <br><br>Phone: ${phone.value} <br><br>Relation: ${relation.value}`;
    p.classList.add("p");
    img = document.createElement("img");
    img.id = "img";
    img.src = "/www/Icons/delete.svg";
    div.appendChild(p);
    div.appendChild(img);
    final = document.getElementsByClassName("branch")[0].appendChild(div);
    name.value = "";
    email.value = "";
    phone.value = "";
    img.addEventListener("click", del);
  }

  function del() {
    this.parentNode.remove(div);
  }
};
