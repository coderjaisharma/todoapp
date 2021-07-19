//1. select all elements
const form =document.querySelector('#new-form');
const list=document.querySelector('#list');
const input=document.querySelector('#item-input');


// 2. when i submit the form add a new element;

form.addEventListener('submit',e=>
    {   
    e.preventDefault()
        // 1. create new item;
        const item=document.createElement('div');
        item.innerText=input.value;
        item.classList.add('list-item');
        console.log(item);

        //2. add item to list
        list.appendChild(item);
        // 3. clear input
        input.value="";
        // 4. setup listener to delete item when clicked

        item.addEventListener('click',e=>{
            item.remove();
        })


    });