function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

CDATASectio

    ul.children[0].innerHTML = 'Item <strong>alterado</strong> pelo JavaScript!';
    ul.children[1].innerText = 'Item 2 <strong>alterado</strong> pelo JavaScript!';
}
