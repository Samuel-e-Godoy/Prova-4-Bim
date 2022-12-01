var selector = document.getElementById("selector");
var card = document.getElementById("card");
var cardBody = document.getElementById("cardBody");
var profissao = document.getElementById("profissao");
var bio = document.getElementById("bio");

selector.addEventListener("change", () => {
    fetch(`http://10.0.0.151:3333/pessoas/?results=6; ${selector.value}`)
      .then((response) => response.json())
      .then((data) => {
        card.setAttribute("src", data.avatar_url);
        cardBody.innerHTML = data.cardBody;
        selector.innerHTML = data.selector;
        profissao.innerHTML = data.profissao;
        bio.innerHTML = data.bio;
      });
  });