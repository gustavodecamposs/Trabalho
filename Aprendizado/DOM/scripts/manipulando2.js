function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    //ul.innerHTML += "<li>Item Adicionado</li>";

    
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item Adicionado";

    ul.appendChild(newLi);
}
