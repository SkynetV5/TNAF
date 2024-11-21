const counter_paragraph = document.getElementById('counter');
const button_add = document.getElementById('add');
const button_change = document.getElementById('change');
console.log(counter_paragraph.innerHTML);


function changeColor(){
    if ( counter_paragraph.style.color == 'black'){
        counter_paragraph.style.color = 'red';
    }
    else{
        counter_paragraph.style.color = 'black';
    }
}

button_change.addEventListener('click', function(){
    if ( counter_paragraph.style.color == 'black'){
        counter_paragraph.style.color = 'red';
    }
    else{
        counter_paragraph.style.color = 'black';
    }
});

function add(){
    let value = Number(counter_paragraph.innerHTML) + 1;
    counter_paragraph.innerHTML = value;
}

button_add.addEventListener('click', function(){
    let value = Number(counter_paragraph.innerHTML) + 1;
    counter_paragraph.innerHTML = value;
});