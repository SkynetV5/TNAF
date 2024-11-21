const button_add = document.getElementById('button_add');
const input = document.getElementById('input');
const ul = document.getElementById('ul');

button_add.addEventListener('click', () => {
        let value = input.value;
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(value));
        ul.appendChild(li);
})