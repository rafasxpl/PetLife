const arrows = [...document.querySelectorAll(".arrow")];
// pego todas os botões de seta dos cards

arrows.map((e) => {
    //faço um map pelo array e adiciono um evento de click a cada elemento
    e.addEventListener("click", () => {
        //pego o pai do botão clicado
        const pai = e.closest(".sub__cards");

        //pego o irmão o próximo irmão do elento pai do botão
        const paragraph = pai.nextElementSibling;

        //por fim adiciono as classes aos elementos <p> e ao botão de seta
        paragraph.classList.toggle("true__visible");
        e.classList.toggle("arrow__reverse");
    })
})

